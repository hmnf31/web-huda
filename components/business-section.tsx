"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Camera, Heart, ExternalLink, Star } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55 },
  }),
}

export default function BusinessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="bisnis" ref={ref} className="px-6 md:px-12 lg:px-20 py-24 max-w-5xl mx-auto">
      {/* section header */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-12"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Bisnis &amp; Seni</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
          Fotografi &amp; Event Wedding
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
          Saya adalah fotografer profesional sekaligus founder dari dua brand wedding yang berpusat di Garut, Jawa Barat.
        </p>
      </motion.div>

      {/* photographer intro card — full width */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="rounded-2xl border border-border bg-card p-8 mb-6 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
      >
        <div className="flex-shrink-0 size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Camera className="size-7 text-primary" aria-hidden />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Profesi</p>
          <h3 className="text-xl font-bold text-foreground">Fotografer Profesional</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-sm max-w-lg">
            Lebih dari sekadar mengambil gambar — setiap frame adalah kisah yang dibingkai dengan cahaya, emosi, dan detail.
            Spesialisasi pada dokumentasi pernikahan, portrait, dan konten visual brand.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Wedding", "Portrait", "Lifestyle", "Product"].map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* two business cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Hakuna Picture */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm group hover:border-primary/40 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Camera className="size-6 text-primary" aria-hidden />
            </div>
            <a
              href="https://v0-hakuna-picture-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi Hakuna Picture"
              className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
          <h3 className="mt-4 text-lg font-bold text-foreground">Hakuna Picture</h3>
          <p className="mt-1 text-xs font-medium text-primary">Vendor Dokumentasi Wedding</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Layanan dokumentasi pernikahan profesional yang mengabadikan setiap momen berharga dengan sentuhan artistik dan penuh cerita.
          </p>
          <div className="mt-4 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-3.5 fill-primary text-primary" aria-hidden />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">Garut &amp; sekitarnya</span>
          </div>
        </motion.div>

        {/* Sawadina WO */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm group hover:border-primary/40 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="size-12 rounded-xl bg-rose-100 flex items-center justify-center">
              <Heart className="size-6 text-rose-500" aria-hidden />
            </div>
            <a
              href="https://instagram.com/sawadina.wo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi Sawadina WO"
              className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-rose-500"
            >
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
          <h3 className="mt-4 text-lg font-bold text-foreground">Sawadina WO</h3>
          <p className="mt-1 text-xs font-medium text-rose-500">Wedding Organizer</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Wedding Organizer yang membantu pasangan mewujudkan hari istimewa dengan konsep elegan, penuh makna, dan bebas stres.
          </p>
          <div className="mt-4 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-3.5 fill-rose-400 text-rose-400" aria-hidden />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">Garut &amp; sekitarnya</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
