"use client"

import { ProjectCard } from "./card/project-card"

import { projectItems, workIntro } from "@/components/site-data"

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            Recent Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Work That Converts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            {workIntro}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projectItems.map((project) => (
            <ProjectCard key={project.title} {...{ ...project, images: project.ss }} />
          ))}
        </div>
      </div>
    </section>
  )
}
