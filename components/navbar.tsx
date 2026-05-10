"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navLinks } from "@/components/site-data"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, resolvedTheme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? resolvedTheme : theme ?? "light"

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md",
        isScrolled && "border-b border-border"
      )}
    >
      <div className="sm:max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">H</span>
            </div>
            <span className="text-lg font-semibold text-foreground tracking-tight">
              HashiraDevs
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b-2 border-transparent text-sm text-muted-foreground hover:text-foreground transition-colors duration-200",
                  pathname === link.href && "border-primary text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
              className="p-2"
              aria-label="Toggle theme"
            >
              {currentTheme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                size="sm"
                className="cursor-pointer bg-foreground text-background hover:bg-foreground/90 font-medium"
              >
                Book Free Consultation
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
            className="w-full justify-start p-2"
            aria-label="Toggle theme"
          >
            {currentTheme === "light" ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
            {currentTheme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button
              size="sm"
              className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium mt-4"
            >
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
