"use client";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./card/project-card";

const projects = [
  {
    title: "High-Converting Restaurant Website",
    description:
      "A modern restaurant site with menu browsing, reservation booking, and online ordering features.",
    technologies: [
      "⚡️ Blazing fast performance",
      "🎯 Conversion-focused UX",
      "✨ Modern UI/UX design",
      "📱 Fully responsive across all devices",
    ],
    gradient: "from-sky-600/20 via-indigo-500/10 to-transparent",
    accentColor: "group-hover:shadow-sky-500/20",
    link: "/case-study/restaurant-website",
    ss: ["/chinese-1.png", "/chinese-2.png", "/chinese-3.png", "/chinese-4.png"],
  },
  {
    title: "Scalable E-Learning Platform",
    description:
      "A complete learning system built to deliver seamless video streaming, secure payments, and user progress tracking — optimized for engagement and growth.",
    technologies: [
      "🎥 Smooth video streaming experience",
      "🔐 Secure authentication & payments",
      "📈 Built to scale with users",
      "✨ Modern UI/UX design",
    ],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "group-hover:shadow-emerald-500/20",
    link: "/case-study/e-learning-website",
    ss:['/elearning-1.png', '/elearning-2.png', '/elearning-3.png', '/elearning-4.png']
  },
  {
    title: "Lead-Generating Real Estate Website",
    description:
      "Crafted to capture high-quality leads with intuitive search, map integration, and conversion-driven design tailored for property businesses.",
    technologies: [
      "📍 Smart search & map integration",
      "🧲 High-converting lead capture",
      "⚡️ Optimized for speed & SEO",
    ],
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    accentColor: "group-hover:shadow-violet-500/20",
    link: "/case-study/dholera-realestate-website",
    ss:['/realestate-1.png', '/realestate-2.png', '/realestate-3.png', '/realestate-4.png']
  },
];

const PlaceHolder = () => {
  return (
    <div className="relative h-52 md:h-56 overflow-hidden">
      {/* Gradient background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          // project.gradient
        )}
      />

      <div className="absolute inset-4 md:inset-6 rounded-lg border border-border/40 bg-background/60 backdrop-blur-sm overflow-hidden">
        {/* Browser dots */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/40">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        </div>
        {/* Content area with subtle pattern */}
        <div className="p-3 space-y-2">
          <div className="h-3 w-3/4 rounded bg-muted/50" />
          <div className="h-3 w-1/2 rounded bg-muted/30" />
          <div className="h-8 w-full rounded bg-muted/20 mt-3" />
          <div className="flex gap-2 mt-2">
            <div className="h-6 w-16 rounded bg-primary/20" />
            <div className="h-6 w-16 rounded bg-muted/30" />
          </div>
        </div>
      </div>
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export function Work() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      {/* Background accent */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Work That Converts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            A selection of recent work showcasing our expertise in building
            complex, scalable applications for ambitious clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard {...{...project, images: project.ss}} />
          ))}
        </div>
      </div>
    </section>
  );
}
