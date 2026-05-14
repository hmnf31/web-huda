"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Cpu, Wifi, Sun, Cloud, CloudRain, Moon, Sunrise, Utensils, ExternalLink, Brain } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55 },
  }),
}

const skills = [
  "HTML / CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Node.js", "PostgreSQL", "MongoDB", "REST API", "Git",
]

const weatherModes = [
  { icon: Sun, label: "Cerah", color: "text-yellow-500 bg-yellow-50" },
  { icon: Cloud, label: "Mendung", color: "text-slate-500 bg-slate-100" },
  { icon: CloudRain, label: "Hujan", color: "text-blue-500 bg-blue-50" },
]

const timeModes = [
  { icon: Sunrise, label: "Pagi", color: "text-orange-400 bg-orange-50" },
  { icon: Sun, label: "Siang", color: "text-yellow-500 bg-yellow-50" },
  { icon: Sunset, label: "Sore", color: "text-rose-400 bg-rose-50" },
  { icon: Moon, label: "Malam", color: "text-indigo-500 bg-indigo-50" },
]

// fallback icon
function Sunset(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 18a5 5 0 0 0-10 0" /><line x1="12" y1="2" x2="12" y2="9" /><line x1="4.22" y1="10.22" x2="5.64" y2="11.64" /><line x1="1" y1="18" x2="3" y2="18" /><line x1="21" y1="18" x2="23" y2="18" /><line x1="18.36" y1="11.64" x2="19.78" y2="10.22" /><line x1="23" y1="22" x2="1" y2="22" /><polyline points="8 6 12 2 16 6" />
    </svg>
  )
}

export default function TechSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="teknologi" ref={ref} className="px-6 md:px-12 lg:px-20 py-24 bg-foreground/[0.02]">
      <div className="max-w-5xl mx-auto">
        {/* header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Teknologi &amp; Engineering</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Fullstack Dev &amp; IoT
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
            Dari aplikasi web skala penuh hingga sistem cerdas berbasis mikrokontroler — saya membangun solusi nyata.
          </p>
        </motion.div>

        {/* bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Fullstack card — spans 2 cols */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="sm:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code2 className="size-5 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Fullstack Web Development</h3>
                <p className="text-xs text-muted-foreground">Basic to Advance + AI Exploration</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-primary/5 border border-primary/20">
              <Brain className="size-4 text-primary shrink-0" aria-hidden />
              <p className="text-xs text-primary">Sedang mengeksplorasi Artificial Intelligence &amp; Machine Learning</p>
            </div>
            <a
              href="null"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <ExternalLink className="size-3.5" aria-hidden />
              Lihat Web yang Sudah Berjalan
            </a>
          </motion.div>

          {/* AI card */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="size-10 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
              <Brain className="size-5 text-violet-600" aria-hidden />
            </div>
            <h3 className="font-bold text-foreground text-sm">Eksplorasi AI</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Belajar dan menerapkan konsep AI/ML pada proyek nyata: chatbot, otomasi, dan analisis data.
            </p>
          </motion.div>

          {/* IoT header */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="sm:col-span-2 lg:col-span-1 rounded-2xl border border-border bg-primary p-6 shadow-sm text-primary-foreground"
          >
            <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Cpu className="size-5 text-white" aria-hidden />
            </div>
            <h3 className="font-bold text-lg">IoT Projects</h3>
            <p className="mt-1 text-sm text-white/70">Arduino &amp; ESP32</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/80">
              <Wifi className="size-3.5" aria-hidden />
              Smart Home &amp; Smart Farming
            </div>
          </motion.div>

          {/* Smart Aquascape */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="sm:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Sun className="size-5 text-blue-600" aria-hidden />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Smart Aquascape Lighting</h3>
                <p className="text-xs text-muted-foreground">Arduino / ESP32</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Sistem lampu aquascape cerdas yang mensimulasikan kondisi cuaca dan siklus waktu alami secara otomatis.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-semibold text-foreground mb-2">Mode Cuaca</p>
                <div className="flex gap-2">
                  {weatherModes.map(({ icon: Icon, label, color }) => (
                    <div key={label} className={`flex flex-col items-center gap-1 rounded-xl p-2 ${color}`}>
                      <Icon className="size-4" aria-hidden />
                      <span className="text-[10px] font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-2">Simulasi Waktu</p>
                <div className="flex gap-2">
                  {timeModes.map(({ icon: Icon, label, color }) => (
                    <div key={label} className={`flex flex-col items-center gap-1 rounded-xl p-2 ${color}`}>
                      <Icon className="size-4" aria-hidden />
                      <span className="text-[10px] font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smart Farming */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="size-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <Utensils className="size-5 text-emerald-600" aria-hidden />
            </div>
            <h3 className="font-bold text-foreground">Smart Auto-Feeder</h3>
            <p className="text-xs text-primary mt-0.5">Smart Farming &amp; Fishery</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Sistem pemberi pakan otomatis terjadwal untuk pertanian &amp; perikanan berbasis mikrokontroler dengan antarmuka kontrol jarak jauh.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Arduino", "ESP32", "IoT", "Scheduled Tasks"].map((t) => (
                <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
