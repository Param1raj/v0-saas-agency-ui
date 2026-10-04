import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"
import { siteConfig } from "@/components/site-data"

export const metadata: Metadata = {
  title: "Terms of Service | HashiraDevs",
  description: "The terms that apply when you use the HashiraDevs website.",
  alternates: {
    canonical: "/terms",
  },
}

// TODO(Param): review this wording (ideally with a lawyer) before relying on it,
// in particular the governing-law section.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="4 October 2026">
      <p>
        These terms apply to your use of {siteConfig.domain}, which is run by Param Raj, trading as
        HashiraDevs. In these terms, &ldquo;I&rdquo; and &ldquo;me&rdquo; refer to HashiraDevs. By using the
        site, you agree to them.
      </p>

      <h2>About the content</h2>
      <p>
        The information on this site describes my services and past work. It is general information, not a
        binding offer, and I may change it at any time. I try to keep it accurate, but I don&apos;t guarantee
        that everything on the site is complete or current, or that the site will always be available.
      </p>

      <h2>Project work</h2>
      <p>
        Any paid work is covered by a separate written quote or agreement. If that agreement conflicts with
        these terms, the agreement applies.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless stated otherwise, the text, design and code of this site belong to me. Client names,
        screenshots and trademarks shown in the portfolio belong to their respective owners and are shown to
        describe work I did for them.
      </p>

      <h2>Using the site</h2>
      <ul>
        <li>Don&apos;t use the contact forms to send spam, malicious content or anything unlawful.</li>
        <li>Don&apos;t try to disrupt the site, access it in unauthorised ways or overload it.</li>
      </ul>

      <h2>Links to other sites</h2>
      <p>
        The site links to other websites, such as live client projects, GitHub and LinkedIn. I&apos;m not
        responsible for their content or how they handle your data.
      </p>

      <h2>Liability</h2>
      <p>
        The site is provided &ldquo;as is&rdquo;. To the extent the law allows, I&apos;m not liable for any
        loss or damage that results from using it or relying on its content.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>Changes</h2>
      <p>I may update these terms from time to time. The date at the top shows the latest version.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  )
}
