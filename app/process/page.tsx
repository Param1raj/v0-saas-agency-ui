"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Search, 
  PenTool, 
  Code2, 
  TestTube, 
  Rocket, 
  HeartHandshake,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { TypingAnimation } from "@/components/ui/typing-animation"

/* ─────────────────────────────────────────────
   MINI VISUAL PREVIEWS 
───────────────────────────────────────────── */

function DiscoveryPreview() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-[280px] h-[200px]">
        {/* Central Hub */}
        <motion.div 
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-indigo-500/20 border border-indigo-500/50 rounded-2xl flex items-center justify-center z-10 backdrop-blur-sm"
        >
          <span className="text-2xl">🎯</span>
        </motion.div>

        {/* Connecting Nodes */}
        {[
          { label: "Goals", icon: "📈", x: -90, y: -60, delay: 0 },
          { label: "Users", icon: "👥", x: 90, y: -60, delay: 0.2 },
          { label: "Tech", icon: "⚙️", x: -90, y: 60, delay: 0.4 },
          { label: "Scope", icon: "📋", x: 90, y: 60, delay: 0.6 },
        ].map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 flex flex-col items-center gap-2"
            style={{ x: `calc(-50% + ${node.x}px)`, y: `calc(-50% + ${node.y}px)` }}
          >
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-lg">{node.icon}</span>
            </div>
            <span className="text-[10px] text-white/50 font-medium tracking-wider uppercase">{node.label}</span>
          </motion.div>
        ))}

        {/* SVG Lines connecting nodes to center */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 280 200">
          <motion.line x1="140" y1="100" x2="50" y2="40" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
          <motion.line x1="140" y1="100" x2="230" y2="40" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
          <motion.line x1="140" y1="100" x2="50" y2="160" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
          <motion.line x1="140" y1="100" x2="230" y2="160" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        </svg>
      </div>
    </div>
  )
}

function DesignPreview() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[320px] rounded-xl border border-white/10 bg-[#1e1e1e] overflow-hidden flex flex-col shadow-2xl">
        {/* Toolbar */}
        <div className="h-6 bg-[#2d2d2d] border-b border-white/5 flex items-center px-2 gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-auto flex gap-2">
            <span className="w-3 h-3 rounded-sm bg-white/10" />
            <span className="w-3 h-3 rounded-sm bg-white/10" />
          </div>
        </div>
        
        {/* Canvas */}
        <div className="flex-1 p-4 bg-[#121212] relative overflow-hidden flex items-center justify-center min-h-[160px]">
          {/* Wireframe Card */}
          <motion.div 
            initial={{ borderRadius: "0px", backgroundColor: "#ffffff05" }}
            animate={{ borderRadius: "16px", backgroundColor: "#ffffff10" }}
            transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
            className="w-48 h-32 border-2 border-violet-500/50 relative p-3 flex flex-col gap-3"
          >
            <div className="w-full h-10 bg-violet-500/20 rounded-lg" />
            <div className="w-3/4 h-2 bg-white/20 rounded" />
            <div className="w-1/2 h-2 bg-white/20 rounded" />
            <motion.div 
              animate={{ width: ["30%", "100%", "30%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="mt-auto h-6 bg-violet-500 rounded-md"
            />

            {/* Fake Cursor */}
            <motion.div 
              animate={{ x: [20, 120, 20], y: [10, 80, 10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-4 h-4 text-white z-20 pointer-events-none drop-shadow-lg"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
            >
              <svg viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L5.5 3.21z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function DevelopmentPreview() {
  const codeLines = [
    '<div className="hero">',
    '  <h1 className="title">',
    '    HashiraDevs',
    '  </h1>',
    '  <Button variant="premium">',
    '    Start Building',
    '  </Button>',
    '</div>'
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[320px] rounded-xl border border-cyan-500/30 bg-[#0d1117] overflow-hidden flex flex-col shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <div className="h-7 bg-[#161b22] border-b border-white/5 flex items-center px-3 gap-2">
          <span className="text-[10px] text-white/50 font-mono">page.tsx</span>
        </div>
        <div className="p-4 font-mono text-[10px] leading-relaxed relative min-h-[160px]">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-3"
            >
              <span className="text-white/20 select-none">{i + 1}</span>
              <span className="text-cyan-300" dangerouslySetInnerHTML={{__html: line.replace(/</g, '&lt;').replace(/className/g, '<span class="text-pink-400">className</span>').replace(/"([^"]+)"/g, '<span class="text-yellow-200">"$1"</span>')}} />
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="absolute bottom-4 left-[3rem] w-1.5 h-3.5 bg-cyan-400"
          />
        </div>
      </div>
    </div>
  )
}

function TestingPreview() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[280px] flex flex-col gap-3">
        {/* Lighthouse Score Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1f2937"
                strokeWidth="3"
              />
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="100, 100"
                initial={{ strokeDasharray: "0, 100" }}
                whileInView={{ strokeDasharray: "100, 100" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-emerald-400">100</span>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white mb-1">Performance</h4>
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <motion.div 
                className="h-full bg-emerald-500" 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2">
          {[
            "Responsive Layout",
            "Cross-Browser QA",
            "Security Audit"
          ].map((item, i) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.3 }}
              className="flex items-center gap-3 p-2 bg-white/5 rounded-lg"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.8 + i * 0.3 }}
                className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[10px]"
              >
                ✓
              </motion.div>
              <span className="text-[11px] text-white/80 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LaunchPreview() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Concentric rings */}
        <motion.div 
          animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full border border-orange-500/50"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          className="absolute inset-0 rounded-full border border-orange-500/50"
        />
        
        {/* Core Planet/Server */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-900/40 border border-orange-500/30 flex items-center justify-center backdrop-blur-md">
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-4xl drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]"
          >
            🚀
          </motion.div>
        </div>

        {/* Floating status badge */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-4 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]"
        >
          LIVE
        </motion.div>
      </div>
    </div>
  )
}

function SupportPreview() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
      {/* Uptime Widget */}
      <div className="w-full max-w-[240px] bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">System Status</span>
          <span className="text-lg font-bold text-white">99.99%</span>
        </div>
        <div className="flex gap-1">
          {[1,2,3,4,5,6,7].map((bar, i) => (
            <motion.div 
              key={i}
              initial={{ height: 4 }}
              animate={{ height: [8, 24, 12, 16, 8][i%5] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse", delay: i * 0.1 }}
              className="w-1.5 bg-blue-500 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Mini Chat */}
      <div className="w-full max-w-[240px] bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2">
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
            <span className="text-[10px]">🧑‍💻</span>
          </div>
          <div className="bg-blue-500/20 text-blue-100 text-[9px] p-2 rounded-xl rounded-bl-none border border-blue-500/30">
            Hey! We noticed a traffic spike and auto-scaled your servers. 🚀
          </div>
        </div>
        <div className="flex gap-2 items-end justify-end">
          <div className="bg-white/10 text-white/80 text-[9px] p-2 rounded-xl rounded-br-none border border-white/10">
            Awesome, thanks for monitoring!
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PROCESS DATA
───────────────────────────────────────────── */

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    icon: Search,
    description: "We begin every project with a deep dive into your business goals, target audience, and technical requirements. This phase ensures we understand the full scope before writing a single line of code.",
    deliverables: [
      "Requirements documentation",
      "Technical feasibility analysis",
      "Project roadmap",
      "Initial cost estimation"
    ],
    preview: <DiscoveryPreview />,
    accent: "#6366f1", // indigo
    accentGlow: "rgba(99,102,241,0.15)"
  },
  {
    number: "02",
    title: "Architecture & Design",
    icon: PenTool,
    description: "Our team designs the system architecture and user experience in parallel. We create wireframes, prototypes, and technical specifications that serve as the blueprint for development.",
    deliverables: [
      "System architecture diagram",
      "UI/UX wireframes & prototypes",
      "Database schema design",
      "API specification"
    ],
    preview: <DesignPreview />,
    accent: "#8b5cf6", // violet
    accentGlow: "rgba(139,92,246,0.15)"
  },
  {
    number: "03",
    title: "Development",
    icon: Code2,
    description: "With a solid foundation in place, our senior engineers build your application using modern frameworks and best practices. You'll receive regular updates and demos throughout the process.",
    deliverables: [
      "Sprint-based cycles",
      "Weekly progress demos",
      "Code review & docs",
      "Version control & CI/CD"
    ],
    preview: <DevelopmentPreview />,
    accent: "#06b6d4", // cyan
    accentGlow: "rgba(6,182,212,0.15)"
  },
  {
    number: "04",
    title: "Testing & Optimization",
    icon: TestTube,
    description: "Quality is non-negotiable. We conduct thorough testing across devices and browsers, optimize performance, and ensure your application meets the highest standards before launch.",
    deliverables: [
      "Automated & manual testing",
      "Performance optimization",
      "Security audit",
      "Cross-browser/device QA"
    ],
    preview: <TestingPreview />,
    accent: "#10b981", // emerald
    accentGlow: "rgba(16,185,129,0.15)"
  },
  {
    number: "05",
    title: "Launch",
    icon: Rocket,
    description: "We handle the deployment process end-to-end, ensuring a smooth transition to production. Our team monitors the launch closely and addresses any issues that arise immediately.",
    deliverables: [
      "Production deployment",
      "DNS & SSL configuration",
      "Launch monitoring",
      "Post-launch support"
    ],
    preview: <LaunchPreview />,
    accent: "#f97316", // orange
    accentGlow: "rgba(249,115,22,0.15)"
  },
  {
    number: "06",
    title: "Ongoing Support",
    icon: HeartHandshake,
    description: "Our partnership doesn't end at launch. We offer ongoing maintenance, feature development, and support to ensure your application continues to perform and evolve with your business.",
    deliverables: [
      "Maintenance & updates",
      "Feature enhancements",
      "Performance monitoring",
      "Priority support access"
    ],
    preview: <SupportPreview />,
    accent: "#3b82f6", // blue
    accentGlow: "rgba(59,130,246,0.15)"
  },
]

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

function ProcessStep({ 
  step, 
  index, 
}: { 
  step: typeof processSteps[0]
  index: number
}) {
  const isEven = index % 2 === 0
  const [hovered, setHovered] = useState(false)

  const TextContent = (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col h-full rounded-3xl overflow-hidden border border-white/8 bg-[#0e0e1a]/80 backdrop-blur-md p-8 md:p-10 transition-all duration-500 hover:-translate-y-1.5"
      style={{
        boxShadow: hovered ? `0 0 0 1px ${step.accent}40, 0 20px 60px -10px ${step.accent}20` : "0 2px 20px rgba(0,0,0,0.4)",
      }}
    >
      <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? '100%' : '0%'} 50%, ${step.accentGlow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
      <p className="relative z-10 text-white/60 leading-relaxed mb-8 text-lg">{step.description}</p>
      <div className="relative z-10 mt-auto">
        <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: step.accent }}>Key Deliverables</h4>
        <ul className="grid grid-cols-1 gap-3">
          {step.deliverables.map(item => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: step.accent }} />
              <span className="text-sm text-white/70">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )

  const PreviewContent = (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center h-full min-h-[300px] rounded-3xl overflow-hidden border border-white/8 bg-[#0e0e1a] backdrop-blur-md p-6 md:p-8 transition-all duration-500 hover:-translate-y-1.5"
      style={{
        boxShadow: hovered ? `0 0 0 1px ${step.accent}40` : "0 2px 20px rgba(0,0,0,0.4)",
      }}
    >
      <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? '0%' : '100%'} 50%, ${step.accentGlow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {step.preview}
      </div>
    </motion.div>
  )

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mb-24 last:mb-0"
    >
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0 relative">
        
        {/* Mobile Header (Number + Title) */}
        <div className="flex items-center gap-6 lg:hidden relative z-10 mb-2">
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center border-4 bg-background z-10 relative shrink-0 shadow-lg" 
            style={{ 
              borderColor: step.accent, 
              color: step.accent,
              boxShadow: `0 0 20px ${step.accent}40`
            }}
          >
            <span className="text-xl font-black">{step.number}</span>
          </div>
          <span className="text-lg font-bold tracking-[0.2em] uppercase" style={{ color: step.accent }}>Step {step.number}</span>
        </div>

        {/* Mobile connector line */}
        {index !== processSteps.length - 1 && (
          <div 
            className="lg:hidden absolute left-[1.75rem] top-[1.75rem] w-1 rounded-full z-0" 
            style={{ 
              height: 'calc(100% + 6rem)',
              background: `linear-gradient(to bottom, ${step.accent}80, transparent)` 
            }}
          />
        )}

        {/* Left Side */}
        <div className="w-full lg:w-[calc(50%-4rem)] z-10">
          {isEven ? TextContent : PreviewContent}
        </div>

        {/* Central Timeline Node & Line (Desktop) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center z-20">
          {/* Node */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full border-4 bg-background flex flex-col items-center justify-center transition-all duration-300 relative z-10 shadow-xl border-black/10 dark:border-white/20 text-black/40 dark:text-white/60"
            style={{ 
              ...(hovered ? {
                borderColor: step.accent,
                color: step.accent,
                boxShadow: `0 0 40px ${step.accent}60`,
              } : {
                boxShadow: '0 0 20px rgba(0,0,0,0.05)',
              })
            }}
          >
            <span className="text-2xl font-black">{step.number}</span>
          </motion.div>
          {/* Label */}
          <motion.span 
            className="absolute -bottom-8 text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap text-muted-foreground dark:text-white/40"
            style={{ 
              ...(hovered && { color: step.accent })
            }}
          >
            Step {step.number}
          </motion.span>
          
          {/* Desktop Connecting Line to next step */}
          {index !== processSteps.length - 1 && (
             <div 
               className="absolute top-[40px] w-1 rounded-full z-0" 
               style={{ 
                 height: 'calc(100% + 6rem)',
                 background: `linear-gradient(to bottom, ${step.accent}80, transparent)`
               }} 
             />
          )}
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[calc(50%-4rem)] z-10 mt-4 lg:mt-0">
          {isEven ? PreviewContent : TextContent}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight"
          >
            <TypingAnimation text="How We Work" />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            A proven, transparent process that transforms your vision into 
            a high-quality product. Every step is designed for efficiency, 
            clarity, and exceptional results.
          </motion.p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-4 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={step.number}
              step={step} 
              index={index} 
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-border/50">
        {/* Background glow */}
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed max-w-xl mx-auto">
            Let's discuss your requirements and create a roadmap for success. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              shimmer={true}
              className="group w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] rounded-full"
              asChild
            >
              <a href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-base font-medium border-border/50 bg-transparent hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 rounded-full"
              asChild
            >
              <a href="/portfolio">
                View Our Work
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
