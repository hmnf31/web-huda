"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Bisnis", href: "#bisnis" },
  { label: "Teknologi", href: "#teknologi" },
  { label: "Ketahanan Pangan", href: "#ketahanan-pangan" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        style={{ "--bg-opacity": bgOpacity } as React.CSSProperties}
        className="fixed top-0 inset-x-0 z-50"
      >
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border"
        />
        <nav
          className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between"
          aria-label="Navigasi utama"
        >
          {/* logo */}
          <a href="#hero" className="font-extrabold text-foreground tracking-tight text-lg hover:text-primary transition-colors">
            HMN<span className="text-primary">F</span>
          </a>

          {/* desktop links */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* cta */}
          <a
            href="#kontak"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Hubungi Saya
          </a>

          {/* mobile hamburger */}
          <button
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </motion.header>

      {/* mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-16 inset-x-0 z-40 overflow-hidden bg-background/95 backdrop-blur-md border-b border-border md:hidden"
      >
        <ul className="flex flex-col px-6 py-4 gap-4" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Hubungi Saya
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  )
}
