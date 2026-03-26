import { cn } from "@/lib/utils";
import React, { JSX, ReactNode } from "react";

interface HoverCardProps {
  title: string;
  isLast?: boolean;
  Icon?: any;
  description?: string;
}

export function HoverCard({
  title,
  isLast,
  Icon,
  description,
}: HoverCardProps) {
  return (
    <HoverCardWrapper isLast={isLast}>
        {/* Icon with number badge */}
        <div className="relative mb-8">
          <div className="w-14 h-14 rounded-xl bg-secondary/60 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10 group-hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.35)]">
            <Icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-[15px]">
          {description}
        </p>
      </HoverCardWrapper>

  );
}

export const HoverCardWrapper = ({
  children,
  isLast,
  className
}: {
  children: ReactNode | ReactNode[];
  isLast?: boolean;
  className?:string
}) => {
  return (
    <div
      className={cn("group relative", isLast && "md:col-span-2 lg:col-span-1")}
    >
      <div
        className={cn(
          "h-full p-8 lg:p-10 rounded-2xl border border-border/50 bg-gradient-to-b from-card/40 to-card/20",
          "transition-all duration-500 ease-out",
          "hover:border-primary/30 hover:from-card/60 hover:to-card/30",
          "hover:shadow-[0_8px_40px_-12px_rgba(99,102,241,0.2)]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
