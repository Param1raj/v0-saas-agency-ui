// components/case-study/Hero.tsx

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 text-center relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        High-Converting Portfolio Website
      </motion.h1>

      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Built to turn visitors into paying clients with fast performance and
        conversion-focused design.
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition">
          View Live
        </button>

        <button className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition">
          Build Something Similar
        </button>
      </div>

      {/* Mock Image */}
      <div className="mt-16 max-w-5xl mx-auto rounded-xl overflow-hidden border border-border shadow-xl">
        <div className="h-[300px] bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
      </div>
    </section>
  );
}