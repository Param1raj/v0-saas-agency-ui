import { HoverCard, HoverCardWrapper } from "@/components/card/hover-card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  ChartPie,
  Lock,
  Puzzle,
  Smartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { CaseStudies } from "@/constants/config";
import Image from "next/image";
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel";
import { CarouselItem } from "@/components/ui/carousel";
import CaseStudyLocked from "@/components/case-study/CaseStudyLock";

const CaseStudy = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const param = await params;
  const project = CaseStudies.find((caseStudy) => caseStudy.id === param.slug);

  if (!project) {
    return <CaseStudyLocked />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground mt-10">
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Case Study — HashiraDevs
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
              {project.title}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group relative bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
                >
                  <span className="relative z-10 flex items-center">
                    View Live Project
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  Build Something Similar
                </Button>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="h-72 md:h-96">
                <Image
                  className="rounded-md h-full w-full object-contain sm:object-cover"
                  src={project.images?.[0]}
                  alt={project.title}
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="work" className="relative py-28 md:py-10">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* The Challenge */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                The Challenge
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Our Approach
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </ScrollReveal>
          </div>
        </section>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>
      {/* Background accent */}

      {/* Key Features */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Key Features
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {project.features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.07}>
                <HoverCard
                  title={f.title}
                  description={f.desc}
                  isLast={i === project.features.length - 1}
                  Icon={f.emoji}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 md:py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Results &amp; Impact
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {project.results.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-muted/20 p-5 text-left">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    ✓&ensp;{r}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Visual Showcase
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <HoverCardWrapper className="p-1!">
                    <div className="rounded-xl overflow-hidden h-70">
                        <Image
                            src={image}
                            alt={`${project.title} image - ${i + 1}`}
                            className="object-contain sm:object-cover h-full w-full"
                            width={200}
                            height={200}
                        />
                    </div>
                </HoverCardWrapper>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <div className="rounded-xl border border-border p-6 bg-muted/20 text-center">
              <p className="text-base text-muted-foreground leading-relaxed italic mb-4">
                {`"${project.feedback}"`}
              </p>
              <p className="font-medium">{project.client}</p>
              <p className="text-sm text-muted-foreground">{project.position}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Let's Build Something Like This
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Ready to turn your idea into a high-performing website? Let's
              talk.
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
              {/* <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                Chat on WhatsApp
              </Button> */}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
