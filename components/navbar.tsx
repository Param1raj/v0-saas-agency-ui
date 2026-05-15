"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navLinks } from "@/components/site-data"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, resolvedTheme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? resolvedTheme : theme ?? "dark"

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "py-3 bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group z-50 relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-indigo/20 group-hover:shadow-brand-indigo/40 transition-all duration-300 group-hover:scale-105">
                <span className="text-lg font-bold text-white">H</span>
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">
                HashiraDevs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 group"
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-indigo rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-indigo/50 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    </Link>
                  )
                })}
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
                  className="rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  {mounted && currentTheme === "light" ? <Moon className="w-5 h-5" /> : mounted ? <Sun className="w-5 h-5" /> : <div className="w-5 h-5" />}
                </Button>

                <MagneticButton>
                  <Button
                    asChild
                    size="default"
                    pop={true}
                    className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300"
                  >
                    <Link href="/contact">
                      Book Consultation
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden z-50 relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
                className="rounded-full text-muted-foreground"
                aria-label="Toggle theme"
              >
                {mounted && currentTheme === "light" ? <Moon className="w-5 h-5" /> : mounted ? <Sun className="w-5 h-5" /> : <div className="w-5 h-5" />}
              </Button>
              <button
                className="text-foreground p-2 rounded-full hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 pb-6 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 flex-grow">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto"
            >
              <Button
                asChild
                size="lg"
                pop={true}
                className="w-full rounded-full bg-brand-indigo hover:bg-brand-indigo/90 text-white font-medium py-6 text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
