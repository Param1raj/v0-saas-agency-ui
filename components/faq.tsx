"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including Next.js, React, Node.js, TypeScript, Python, and cloud platforms like AWS, GCP, and Azure. We stay current with the latest frameworks and best practices."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple web app might take 4-8 weeks, while complex SaaS platforms can take 3-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. We also provide 24/7 support for critical applications."
  },
  {
    question: "What's your development process like?",
    answer: "We follow an agile methodology with regular check-ins, transparent communication, and iterative development. Each project includes discovery, design, development, testing, and deployment phases."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely! We love working with startups and small businesses. We understand budget constraints and can scale our services accordingly. Many of our long-term clients started as small projects."
  },
  {
    question: "What makes HashiraDevs different from other agencies?",
    answer: "We combine technical excellence with business acumen. Our senior-level developers have extensive experience, and we focus on delivering scalable, maintainable solutions that grow with your business."
  }
]

export function FAQ() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            Everything you need to know about working with us
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/60 rounded-lg bg-card/30 px-6 hover:bg-card/50 transition-colors"
            >
              <AccordionTrigger className="text-left py-6 text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}