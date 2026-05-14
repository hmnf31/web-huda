"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Globe } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55 },
  }),
}

const projects = [
  {
    name: "Hakuna Picture Website",
    desc: "Sistem manajemen klien dan galeri foto untuk bisnis dokumentasi wedding.",
    url: "https://v0-hakuna-picture-website.vercel.app/",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    status: "Live",
  },
  {
    name: "AgriTrack IoT",
    desc: "Dashboard monitoring real-time untuk sistem smart farming berbasis ESP32.",
    url: "https://proyek-2.com",
    tags: ["React", "MQTT", "Node.js"],
    status: "On Product",
  },
  {
    name: "AquaLog",
    desc: "Aplikasi pencatatan dan analisis pertumbuhan ikan serta kualitas air aquaponik.",
    url: "null",
    tags: ["Next.js", "Chart.js", "MongoDB"],
    status: "On Progress",
  },
  {
    name: "FeederCtrl",
    desc: "Antarmuka web untuk mengontrol dan menjadwalkan auto-feeder berbasis ESP32.",
    url: "",
    tags: ["React", "WebSocket", "Arduino"],
    status: "Live",
  },
  {
    name: "Sawadina Landing",
    desc: "Website profil dan kontak untuk bisnis Wedding Organizer Sawadina.",
    url: "",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    status: "On Procces",
  },
  {
    name: "Portfolio v2",
    desc: "Portofolio pribadi ini — dibangun dengan Next.js App Router dan Framer Motion.",
    url: "#",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    status: "Live",
  },
]

const statusColor: Record<string, string> = {
  Live: "bg-green-100 text-green-700",
  Beta: "bg-amber-100 text-amber-700",
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="proyek" ref={ref} className="px-6 md:px-12 lg:px-20 py-24 bg-foreground/[0.02]">
      <div className="max-w-5xl mx-auto">
        {/* header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Portofolio Live</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Proyek &amp; Tautan Aktif
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
            Kumpulan web dan aplikasi yang sudah berjalan — dari sistem bisnis hingga proyek IoT.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Globe className="size-5 text-primary" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-foreground text-sm">{p.name}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusColor[p.status]}`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{p.desc}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ExternalLink
                className="size-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"
                aria-hidden
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
