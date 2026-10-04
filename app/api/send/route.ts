import { NextResponse } from 'next/server';

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  company: 120,
  projectType: 50,
  budgetRange: 50,
  timeline: 50,
  message: 5000,
} as const;

type Field = keyof typeof MAX_LENGTHS;

const REQUIRED_FIELDS: Field[] = ['name', 'email', 'projectType', 'budgetRange', 'timeline', 'message'];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const fields = {} as Record<Field, string>;
    for (const field of Object.keys(MAX_LENGTHS) as Field[]) {
      const value = body[field];
      if (value !== undefined && value !== null && typeof value !== 'string') {
        return NextResponse.json({ error: `Invalid value for ${field}` }, { status: 400 });
      }
      fields[field] = (value ?? '').trim();
    }

    // Validate required fields
    if (REQUIRED_FIELDS.some((field) => !fields[field])) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    for (const field of Object.keys(MAX_LENGTHS) as Field[]) {
      if (fields[field].length > MAX_LENGTHS[field]) {
        return NextResponse.json(
          { error: `${field} must be at most ${MAX_LENGTHS[field]} characters` },
          { status: 400 }
        );
      }
    }

    if (!EMAIL_PATTERN.test(fields.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const isStartupLead = body.source === 'startups';

    const resendApiKey = process.env.RESEND_API_KEY || process.env.NEXT_RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Resend API key is missing from environment variables');
      return NextResponse.json({ error: 'Email configuration is missing on the server' }, { status: 500 });
    }

    const toEmail = process.env.RESEND_TO_EMAIL;
    if (!toEmail) {
      console.error('RESEND_TO_EMAIL is missing from environment variables');
      return NextResponse.json({ error: 'Email configuration is missing on the server' }, { status: 500 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'HashiraDevs Contact <leads@hashiradevs.com>';

    const name = escapeHtml(fields.name);
    const email = escapeHtml(fields.email);
    const company = escapeHtml(fields.company);
    const projectType = escapeHtml(fields.projectType);
    const budgetRange = escapeHtml(fields.budgetRange);
    const timeline = escapeHtml(fields.timeline);
    const message = escapeHtml(fields.message);

    // Subject is plain text, so it uses the unescaped values; newlines are stripped to keep it on one line
    const subject = `${isStartupLead ? '[Startup] ' : ''}New Lead: ${fields.name} (${fields.projectType})`.replace(/[\r\n]+/g, ' ');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
            <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not Specified'}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget Range:</strong> ${budgetRange}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>

            <h3 style="color: #4b5563; margin-top: 20px;">Message:</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #6366f1; white-space: pre-wrap; color: #1f2937;">
              ${message}
            </div>

            <hr style="border: 0; border-top: 1px solid #eaeaea; margin-top: 30px;" />
            <p style="font-size: 12px; color: #9ca3af; text-align: center;">Submitted from the HashiraDevs ${isStartupLead ? '/startups page' : 'Website Contact Form'}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API Error response:', errorText);
      let errorMessage = 'Failed to send email via Resend';
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorMessage;
      } catch (_) {}
      return NextResponse.json({ error: errorMessage }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('API send route error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
