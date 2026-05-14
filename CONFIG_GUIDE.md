# Portofolio Settings & Configuration Guide

## 🎨 Cara Menggunakan Admin Dashboard

### Akses Admin Dashboard
Buka URL: `http://localhost:3000/admin` (saat development) atau `/admin` di production

### Tab yang Tersedia

#### 1. **Profile**
- Update nama, judul, subtitle, bio, dan lokasi
- Upload foto profil (URL atau path lokal)
- Perubahan akan langsung terlihat di hero section

#### 2. **Kontak**
- Email, nomor telepon, dan alamat
- Link social media: Instagram, GitHub, LinkedIn, website
- Digunakan di footer dan contact section

#### 3. **Fotografi**
- Kelola layanan fotografi yang Anda tawarkan
- Edit judul dan deskripsi setiap layanan
- Tambah/hapus layanan sesuai kebutuhan

#### 4. **Teknologi**
- List teknologi yang Anda kuasai
- Dipilah per kategori: Frontend, Backend, IoT, Tools
- Pisahkan dengan koma saat edit

#### 5. **Proyek** *(Coming Soon)*
- Kelola proyek/portfolio yang sudah Anda buat
- Edit deskripsi, teknologi, dan link

#### 6. **Bisnis** *(Coming Soon)*
- Daftar layanan bisnis utama
- Deskripsi & informasi tambahan

#### 7. **Sustainability** *(Coming Soon)*
- Update inisiatif sustainability Anda
- Impact & hasil yang sudah dicapai

---

## 🚀 Cara Update Konten

### Method 1: Melalui Admin Dashboard (Recommended)
1. Buka `/admin`
2. Pilih tab yang ingin diubah
3. Edit informasi
4. Klik **"Simpan Perubahan"**
5. Refresh halaman utama untuk lihat perubahan

### Method 2: Edit Direct di Code
1. Buka file `lib/config.ts`
2. Edit nilai sesuai kebutuhan
3. Save file - perubahan akan auto-refresh di preview

### Method 3: Copy-Paste Configuration
1. Di Admin Dashboard, klik **"Salin Kode"**
2. Paste ke `lib/config.ts`
3. Deploy ke production

---

## 📸 Menggunakan Profile Photo

### Upload Foto
1. Siapkan foto profil (JPG, PNG, format square recommended)
2. Upload ke folder `/public/images/`
3. Nama file misal: `profile.jpg`

### Set di Config
Pergi ke Admin > Profile > URL Foto Profil
```
/images/profile.jpg
```

### Fitur Foto
- ✅ Circular dengan glow effect
- ✅ Animasi hover smooth
- ✅ Responsive untuk mobile & desktop
- ✅ Loading prioritas (optimized)

---

## 🔧 Struktur File Config

```typescript
// lib/config.ts
export const portfolioConfig = {
  profile: { /* nama, bio, foto */ },
  contact: { /* email, socials */ },
  photography: { /* layanan fotografi */ },
  technologies: { /* skills per kategori */ },
  projects: { /* daftar proyek */ },
  business: { /* layanan bisnis */ },
  sustainability: { /* inisiatif sustainability */ },
  social: { /* link social media */ },
  cta: { /* call-to-action buttons */ },
}
```

---

## 📝 Tips & Best Practices

- **Foto Profil**: Gunakan foto berkualitas tinggi dengan latar belakang clean
- **Bio**: Singkat, padat, dan menarik (2-3 kalimat)
- **Kontak**: Pastikan semua link social media aktif
- **Teknologi**: List maksimal 4-5 per kategori agar tidak ramai
- **Proyek**: Prioritaskan proyek terbaru & paling impressive

---

## 🐛 Troubleshooting

### Foto tidak muncul
- Pastikan file ada di `/public/images/`
- Cek path URL di config (harus `/images/nama-file`)
- Clear browser cache & reload

### Perubahan tidak muncul
- Admin dashboard menyimpan ke localStorage (development)
- Untuk production, update langsung di `lib/config.ts`
- Refresh halaman setelah update

### Admin page error
- Pastikan Framer Motion terinstall: `pnpm add framer-motion`
- Check console untuk error details

---

## 🌐 Deploy ke Production

### Vercel
1. Push code ke GitHub
2. Connect dengan Vercel
3. Vercel auto-deploy setiap ada push
4. Update konten di `lib/config.ts` sebelum push

### Self-Hosted
1. Build: `pnpm build`
2. Start: `pnpm start`
3. Backup `lib/config.ts` sebelum update

---

## 📚 Component Structure

```
app/
├── admin/page.tsx          (Admin Dashboard)
├── page.tsx                (Main Page)
└── layout.tsx              (Root Layout)

components/
├── hero-section.tsx        (Uses: profile)
├── profile-photo.tsx       (Profile Photo Circle)
├── business-section.tsx    (Uses: business, contact)
├── tech-section.tsx        (Uses: technologies)
├── projects-section.tsx    (Uses: projects)
├── sustainability-section.tsx (Uses: sustainability)
├── contact-section.tsx     (Uses: contact)
├── navbar.tsx
└── footer.tsx             (Uses: contact, social)

lib/
└── config.ts              (Central Config)
```

---

## 💡 Next Steps

1. ✅ Update profile photo
2. ✅ Edit kontak Anda
3. ✅ List teknologi yang dikuasai
4. ✅ Add proyek-proyek Anda
5. ✅ Deploy ke Vercel/hosting pilihan
6. ✅ Share dengan dunia! 🚀
