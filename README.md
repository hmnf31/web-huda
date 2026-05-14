# Huda Muhammad Nur Fauzi — Portofolio

Website portofolio pribadi lintas disiplin — **Fotografi • Teknologi • Keberlanjutan**.

Dibangun dengan [Next.js](https://nextjs.org/) 16, TypeScript, Tailwind CSS 4, dan Framer Motion. Mengusung tema Nature-Tech dengan aksen hijau daun dan palet warna hangat.

## Fitur

- **Hero Section** — Perkenalan dengan foto profil animasi, bio, dan CTA
- **Bisnis & Fotografi** — Profil brand Hakuna Picture & Sawadina WO
- **Teknologi & IoT** — Fullstack development, IoT smart aquascape, smart auto-feeder
- **Ketahanan Pangan** — Ekosistem pekarangan: aquaponik NFT, ayam petelur, maggot BSF
- **Proyek Live** — Tautan ke proyek yang sudah berjalan
- **Kontak** — Form kirim pesan via WhatsApp & tautan sosial media
- **Admin Dashboard** — Panel pengaturan konten di `/admin`
- **Dark Mode** — Beralih tema terang/gelap
- **Fully Responsive** — Mobile-first, desktop siap

## Teknologi

| Stack | Tools |
|-------|-------|
| **Framework** | Next.js 16 (App Router) |
| **Bahasa** | TypeScript |
| **Styling** | Tailwind CSS 4 + tw-animate-css |
| **Animasi** | Framer Motion |
| **UI Library** | Radix UI + shadcn/ui |
| **Font** | Plus Jakarta Sans |
| **Icons** | Lucide React |
| **Deploy** | GitHub Pages |

## Cara Clone & Menjalankan

```bash
# Clone repositori
git clone https://github.com/hmnf31/web-huda.git
cd web-huda

# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Cara Deploy

### GitHub Pages (Otomatis via Actions)

Setiap push ke branch `main` akan otomatis:
1. Build project menjadi static files (`output: 'export'`)
2. Deploy ke GitHub Pages

Akses live di: `https://hmnf31.github.io/web-huda/`

### Manual Build

```bash
pnpm build
pnpm start
```

### Update Konten

1. **Via Admin Dashboard** — Buka `/admin` lalu edit konten melalui form
2. **Edit Langsung** — Ubah file `lib/config.ts` lalu commit & push

## Struktur Folder

```
src/
├── app/
│   ├── admin/page.tsx    — Dashboard admin
│   ├── layout.tsx        — Root layout & metadata
│   └── page.tsx          — Halaman utama
├── components/
│   ├── ui/               — Komponen UI (shadcn/ui)
│   ├── hero-section.tsx
│   ├── business-section.tsx
│   ├── tech-section.tsx
│   ├── projects-section.tsx
│   ├── sustainability-section.tsx
│   ├── contact-section.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── profile-photo.tsx
├── lib/
│   └── config.ts         — Konfigurasi konten terpusat
├── public/
│   └── images/           — Aset gambar
└── styles/
    └── globals.css       — Global styles & design tokens
```

## Lisensi

Hak cipta © 2026 Huda Muhammad Nur Fauzi.
