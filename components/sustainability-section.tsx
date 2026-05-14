"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Droplets, Egg, Recycle, Leaf, ArrowRight, Instagram } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.55 },
  }),
}

const ecosystem = [
  {
    icon: Droplets,
    title: "Sistem Aquaponic (NFT)",
    color: "bg-cyan-100 text-cyan-600",
    description:
      "Budidaya ikan Nila & Lele dalam kolam terintegrasi. Nutrisi dari air kolam dialirkan melalui sistem NFT untuk menyuburkan sayuran: Kangkung, Pakcoy, dan Saosin.",
    tags: ["Nila", "Lele", "Kangkung", "Pakcoy", "Saosin"],
  },
  {
    icon: Egg,
    title: "Peternakan Mini",
    color: "bg-amber-100 text-amber-600",
    description:
      "Pemeliharaan Ayam Petelur untuk memenuhi kebutuhan protein harian keluarga secara mandiri. Telur segar setiap hari dari pekarangan sendiri.",
    tags: ["Ayam Petelur", "Protein Harian", "Mandiri"],
  },
  {
    icon: Recycle,
    title: "Manajemen Limbah (BSF)",
    color: "bg-lime-100 text-lime-600",
    description:
      "Sampah organik rumah tangga diolah menggunakan Maggot Black Soldier Fly (BSF). Maggot yang dihasilkan kemudian dijadikan pakan ternak — zero waste sejati.",
    tags: ["Maggot BSF", "Zero Waste", "Pakan Ternak"],
  },
]

export default function SustainabilitySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="ketahanan-pangan" ref={ref} className="px-6 md:px-12 lg:px-20 py-24 max-w-5xl mx-auto">
      {/* header */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Sustainability Project</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
          Ketahanan Pangan &amp; Zero Waste
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
          Membangun ekosistem mandiri di pekarangan rumah — dari kolam ikan hingga kompos organik — semuanya terhubung dalam satu siklus alami yang berkelanjutan.
        </p>
      </motion.div>

      {/* ecosystem overview banner */}
      <motion.div
        custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="rounded-2xl border border-primary/20 bg-primary/5 p-6 mb-8 flex flex-col sm:flex-row gap-4 items-start"
      >
        <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <Leaf className="size-6 text-primary" aria-hidden />
        </div>
        <div>
          <h3 className="font-bold text-foreground">Ekosistem Pekarangan Rumah</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-lg">
            Sebuah perjalanan membangun ketahanan pangan keluarga secara mandiri. Mulai dari nol, kini ekosistem ini menghasilkan pangan segar setiap hari.
          </p>
          {/* simple flow diagram */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium">
            <span className="rounded-lg bg-cyan-100 text-cyan-700 px-3 py-1.5">Ikan Nila &amp; Lele</span>
            <ArrowRight className="size-3.5 text-muted-foreground shrink-0" aria-hidden />
            <span className="rounded-lg bg-green-100 text-green-700 px-3 py-1.5">Sayuran NFT</span>
            <ArrowRight className="size-3.5 text-muted-foreground shrink-0" aria-hidden />
            <span className="rounded-lg bg-amber-100 text-amber-700 px-3 py-1.5">Ayam Petelur</span>
            <ArrowRight className="size-3.5 text-muted-foreground shrink-0" aria-hidden />
            <span className="rounded-lg bg-lime-100 text-lime-700 px-3 py-1.5">Maggot BSF</span>
            <ArrowRight className="size-3.5 text-muted-foreground shrink-0" aria-hidden />
            <span className="rounded-lg bg-primary/10 text-primary px-3 py-1.5">♻ Kembali ke Ternak</span>
          </div>
        </div>
      </motion.div>

      {/* detail cards */}
      <div className="grid sm:grid-cols-3 gap-5">
        {ecosystem.map(({ icon: Icon, title, color, description, tags }, i) => (
          <motion.div
            key={title}
            custom={i + 2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/30 transition-colors"
          >
            <div className={`size-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
              <Icon className="size-5" aria-hidden />
            </div>
            <h3 className="font-bold text-foreground text-sm">{title}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* social note */}
      <motion.div
        custom={5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4"
      >
        <Instagram className="size-5 text-rose-500 shrink-0" aria-hidden />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Seluruh proses ekosistem ini didokumentasikan di{" "}
          <a
            href="https://instagram.com/hudamuhamadnf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-primary transition-colors"
          >
            sosial media pribadi saya
          </a>
          .
        </p>
      </motion.div>
    </section>
  )
}
