"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, FolderOpen } from "lucide-react"
import { ProfilePhoto } from "./profile-photo"
import { portfolioConfig } from "@/lib/config"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
}

export default function HeroSection() {
  const { profile, cta } = portfolioConfig
  
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 pb-16 overflow-hidden"
    >
      {/* subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.18 0.01 240) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.18 0.01 240) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
        {/* Left: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <ProfilePhoto src={profile.profileImage} alt={profile.name} size="large" />
        </motion.div>

        {/* Right: Text Content */}
        <div className="order-1 lg:order-2">
        {/* tag */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-8"
        >
          <span className="size-2 rounded-full bg-primary animate-pulse" aria-hidden />
          Tersedia untuk kolaborasi
        </motion.div>

        {/* headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-tight text-balance text-foreground"
        >
          Halo, Saya{" "}
          <span className="text-primary">{profile.name.split(" ").slice(0, 2).join(" ")}</span>
        </motion.h1>

        {/* sub-headline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty"
        >
          {profile.bio}
        </motion.p>

        {/* description */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed"
        >
          {profile.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#proyek"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-90 transition-opacity"
          >
            <FolderOpen className="size-4" aria-hidden />
            {cta.secondary}
          </a>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Mail className="size-4" aria-hidden />
            {cta.primary}
          </a>
        </motion.div>

        {/* disciplines row */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap gap-3"
        >
          {["📸 Fotografi", "💻 Fullstack Dev", "⚡ IoT Engineer", "🌱 Ketahanan Pangan"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        aria-hidden
      >
        <span className="text-xs tracking-widest uppercase">Gulir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
