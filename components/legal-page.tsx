import type { ReactNode } from "react"

interface LegalPageProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="relative max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{title}</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {lastUpdated}</p>
          <div className="text-[15px] md:text-base break-words [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:text-muted-foreground [&_li]:leading-relaxed [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:text-foreground [&_strong]:font-medium">
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}
