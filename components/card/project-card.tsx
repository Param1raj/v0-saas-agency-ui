import { cn } from "@/lib/utils";
import Link from "next/link";
import { AutoScrollCarousel } from "../auto-scroll-carousel";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps{
    link: string;
    title: string;
    accentColor: string;
    images: string[];
    description: string;
    technologies:string[]
}

export function ProjectCard(project: ProjectCardProps) {
  return (
    <Link href={project.link}>
      <div
        key={project.title}
        className={cn(
          "group relative flex flex-col rounded-2xl border border-border/60 bg-card/40 overflow-hidden",
          "transition-all duration-500 ease-out",
          "hover:border-primary/30 hover:-translate-y-1",
          "hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]",
          project.accentColor,
        )}
      >
        <AutoScrollCarousel>
          {project.images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="h-60">
                <Image
                  className="rounded-md h-full w-full object-cover"
                  src={src}
                  alt={project.title}
                  width={400}
                  height={400}
                />
              </div>
            </CarouselItem>
          ))}
        </AutoScrollCarousel>
        {/* Content */}
        <div className="flex flex-col flex-1 p-6 md:p-8">
          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            {project.technologies.map((tech) => (
              <p
                key={tech}
                className="px-2.5 mb-2 py-1 text-xs font-medium w-fit rounded-md bg-secondary/80 text-muted-foreground border border-border/50"
              >
                {tech}
              </p>
            ))}
          </div>

          {/* View Case Study Link */}
          <Link
            href={project.link}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Top edge glow on hover */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
}
