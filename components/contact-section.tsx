"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageCircle, Instagram, Github, Linkedin, Send, User, MessageSquare } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55 },
  }),
}

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6281219995475",
    icon: MessageCircle,
    color: "hover:border-green-500 hover:text-green-600",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/hudamuhamadnf",
    icon: Instagram,
    color: "hover:border-rose-500 hover:text-rose-500",
  },
  {
    label: "GitHub",
    href: "https://github.com/hmnf31",
    icon: Github,
    color: "hover:border-foreground hover:text-foreground",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/huda-mnf",
    icon: Linkedin,
    color: "hover:border-blue-600 hover:text-blue-600",
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    const waMsg = encodeURIComponent(`Halo Huda, nama saya *${name}*.\n\n${message}`)
    window.open(`https://wa.me/6281219995475?text=${waMsg}`, "_blank")
    setSent(true)
    setName("")
    setMessage("")
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="kontak" ref={ref} className="px-6 md:px-12 lg:px-20 py-24 max-w-5xl mx-auto">
      {/* header */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Kontak</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
          Mari Berkolaborasi
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md leading-relaxed">
          Punya proyek menarik? Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar ngobrol.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* form */}
        <motion.form
          custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4"
          aria-label="Form kontak"
        >
          <h3 className="font-semibold text-foreground">Kirim Pesan</h3>

          <div className="relative">
            <label htmlFor="contact-name" className="sr-only">Nama Anda</label>
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden />
            <input
              id="contact-name"
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>

          <div className="relative">
            <label htmlFor="contact-message" className="sr-only">Pesan</label>
            <MessageSquare className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" aria-hidden />
            <textarea
              id="contact-message"
              placeholder="Tulis pesan Anda..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Send className="size-4" aria-hidden />
            {sent ? "Pesan Terkirim! ✓" : "Kirim via WhatsApp"}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Pesan akan dikirimkan langsung ke WhatsApp saya.
          </p>
        </motion.form>

        {/* socials */}
        <motion.div
          custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-4"
        >
          <h3 className="font-semibold text-foreground">Temukan Saya Di</h3>
          <div className="grid grid-cols-2 gap-3">
            {socials.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 text-muted-foreground transition-colors ${color}`}
              >
                <Icon className="size-5 shrink-0" aria-hidden />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>

          {/* availability note */}
          <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm font-semibold text-primary">Saat ini tersedia untuk:</p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {[
                "Dokumentasi foto & video wedding",
                "Proyek web fullstack",
                "Konsultasi IoT & smart farming",
                "Kolaborasi konten sustainability",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
