import { ScrollReveal } from "@/components/ScrollReveal";
import { Lock, Clock, FileText, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";

const infoItems = [
  { label: "Industry", value: "Technology / SaaS" },
  { label: "Type", value: "Web Application" },
  { label: "Status", value: "Case Study Coming Soon" },
];

const reasons = [
  { icon: FileText, text: "Detailed documentation is currently being prepared" },
  { icon: ShieldCheck, text: "Awaiting final client approval for publication" },
  { icon: Clock, text: "Project was recently completed — write-up in progress" },
];

const CaseStudyLocked = () => (
  <div className="min-h-screen bg-background text-foreground mt-10">
    {/* Hero */}
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            HashiraDevs — Project Archive
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            Case Study Not Available Yet
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            This project has been successfully delivered, but the full case study hasn't been published yet. We're working on documenting the process, results, and insights — it'll be worth the wait.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="relative max-w-xl mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 blur-2xl opacity-60" />
            {/* Card */}
            <div className="relative rounded-xl border border-border bg-muted/20 overflow-hidden">
              <div className="h-64 md:h-80 bg-muted/30 blur-[6px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/60 backdrop-blur-sm">
                <div className="rounded-full border border-border bg-muted/40 p-4">
                  <Lock className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium tracking-wide text-muted-foreground">Coming Soon</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Project Context */}
    {/* <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About This Project</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            A custom-built web solution designed to streamline operations and elevate the client's digital presence. The project focused on performance, usability, and long-term scalability.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {infoItems.map((item) => (
              <div key={item.label} className="rounded-lg border border-border p-4 bg-muted/20">
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section> */}

    {/* Why Not Available */}
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Why This Case Study Isn't Published Yet</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-muted/20 p-5 text-left transition duration-200 ease-in-out hover:bg-muted/40">
                <r.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                <p className="text-base text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Sneak Preview */}
    {/* <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">Preview</h2>
          <p className="text-sm text-muted-foreground text-center mb-8">Preview Only</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="rounded-xl border border-border overflow-hidden transition duration-200 ease-in-out hover:scale-[1.02]">
                <div className="h-56 bg-muted/30 blur-sm" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section> */}

    {/* Status Indicator */}
    <section className="py-10 md:py-10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-muted/20 px-6 py-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">This case study will be available soon</span>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Want Something Similar?</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Don't wait for the write-up — let's start building yours today.
          </p>
          <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="group relative bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
              >
                <span className="relative z-10 flex items-center">
                  Start a Project
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                Chat on WhatsApp
              </Button>
            </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default CaseStudyLocked;
