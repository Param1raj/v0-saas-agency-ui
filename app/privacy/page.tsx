import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import { siteConfig } from "@/components/site-data"

export const metadata: Metadata = {
  title: "Privacy Policy | HashiraDevs",
  description: "How HashiraDevs handles the information you send through this website.",
  alternates: {
    canonical: "/privacy",
  },
}

// TODO(Param): review this wording (ideally with a lawyer) before relying on it.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="4 October 2026">
      <p>
        This website ({siteConfig.domain}) is run by Param Raj, trading as HashiraDevs, based in
        Moradabad, Uttar Pradesh, India. In this policy, &ldquo;I&rdquo; and &ldquo;me&rdquo; refer to
        HashiraDevs. This page explains what information the site collects, why, and who it is shared with.
      </p>

      <h2>Information you send me</h2>
      <p>When you use a contact form on this site, I receive:</p>
      <ul>
        <li>your name and email address</li>
        <li>your company name, if you give one</li>
        <li>the project type, budget range and timeline you select</li>
        <li>your message</li>
        <li>which page the form was sent from</li>
      </ul>
      <p>
        If you email me, call me or message me on WhatsApp, I receive whatever you choose to send through
        that channel.
      </p>

      <h2>How I use it</h2>
      <p>
        I use this information only to reply to you, discuss your project, prepare a quote and, if we work
        together, carry out that work. I don&apos;t add you to marketing lists and I don&apos;t sell or rent
        your information to anyone.
      </p>

      <h2>Services that process your information</h2>
      <ul>
        <li>
          <strong>Resend</strong> delivers contact-form submissions to my inbox by email. Your form details
          pass through Resend&apos;s servers to do this.
        </li>
        <li>
          <strong>Vercel</strong> hosts this website. Like any web host, it processes technical request data
          (such as IP address and browser type) to serve and protect the site.
        </li>
        <li>
          <strong>Vercel Web Analytics</strong> gives me aggregated statistics about visits, such as pages
          viewed, referring sites, country and device type. According to Vercel, it does not use cookies and
          does not identify individual visitors.
        </li>
      </ul>
      <p>
        These providers may process data outside India, including in the United States. Each has its own
        privacy policy that governs how it handles data.
      </p>

      <h2>Cookies</h2>
      <p>
        The site does not set advertising or tracking cookies. Your browser may store a light/dark theme
        preference locally so the site remembers your choice.
      </p>

      <h2>How long I keep it</h2>
      <p>
        I keep enquiries for as long as I need them to respond and to keep a record of our conversation. If
        we work together, I keep project correspondence for as long as needed for the project and for my
        business records.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask me to show you, correct or delete the information I hold about you by emailing{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. I&apos;ll respond as soon as I
        reasonably can.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If I change how the site handles personal information, I&apos;ll update this page and the date at
        the top.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  )
}
