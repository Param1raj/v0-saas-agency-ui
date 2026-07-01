import { NextResponse } from 'next/server';

// Allow self-signed certificates in local development to bypass SSL-intercepting firewalls/proxies
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budgetRange, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !budgetRange || !timeline || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY || process.env.NEXT_RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Resend API key is missing from environment variables');
      return NextResponse.json({ error: 'Email configuration is missing on the server' }, { status: 500 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'HashiraDevs Contact <leads@hashiradevs.com>';
    const toEmail = process.env.RESEND_TO_EMAIL || 'charur7409@gmail.com';

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject: `New Lead: ${name} (${projectType})`,
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
            <p style="font-size: 12px; color: #9ca3af; text-align: center;">Submitted from HashiraDevs Website Contact Form</p>
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
