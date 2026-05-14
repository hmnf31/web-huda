'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Save, Upload, Copy, Check } from 'lucide-react'
import { portfolioConfig } from '@/lib/config'

export default function AdminPage() {
  const [config, setConfig] = useState(portfolioConfig)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [isSaved, setIsSaved] = useState(false)

  // Save config to localStorage for demo
  const handleSave = () => {
    localStorage.setItem('portfolioConfig', JSON.stringify(config))
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const handleCopyCode = () => {
    const code = `// Copy this into lib/config.ts\nexport const portfolioConfig = ${JSON.stringify(config, null, 2)}`
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const updateNested = (path: string[], value: any) => {
    const newConfig = JSON.parse(JSON.stringify(config))
    let obj = newConfig
    for (let i = 0; i < path.length - 1; i++) {
      obj = obj[path[i]]
    }
    obj[path[path.length - 1]] = value
    setConfig(newConfig)
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'contact', label: 'Kontak', icon: '📞' },
    { id: 'photography', label: 'Fotografi', icon: '📸' },
    { id: 'technology', label: 'Teknologi', icon: '💻' },
    { id: 'projects', label: 'Proyek', icon: '📁' },
    { id: 'business', label: 'Bisnis', icon: '💼' },
    { id: 'sustainability', label: 'Sustainability', icon: '🌱' },
  ]

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Settings</h1>
          <p className="text-muted-foreground">
            Kelola konten portofolio Anda dari sini. Semua perubahan akan diperbarui di website.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-secondary'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-xl border border-border p-8"
        >
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Informasi Profil</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    value={config.profile.name}
                    onChange={(e) => updateNested(['profile', 'name'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Judul/Title</label>
                  <input
                    type="text"
                    value={config.profile.title}
                    onChange={(e) => updateNested(['profile', 'title'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={config.profile.subtitle}
                    onChange={(e) => updateNested(['profile', 'subtitle'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Lokasi</label>
                  <input
                    type="text"
                    value={config.profile.location}
                    onChange={(e) => updateNested(['profile', 'location'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                  <textarea
                    value={config.profile.bio}
                    onChange={(e) => updateNested(['profile', 'bio'], e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">URL Foto Profil</label>
                  <input
                    type="text"
                    value={config.profile.profileImage}
                    onChange={(e) => updateNested(['profile', 'profileImage'], e.target.value)}
                    placeholder="/images/profile.jpg"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Upload foto Anda ke /public/images/ dan masukkan path-nya di sini
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Informasi Kontak</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={config.contact.email}
                    onChange={(e) => updateNested(['contact', 'email'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    value={config.contact.phone}
                    onChange={(e) => updateNested(['contact', 'phone'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Instagram</label>
                  <input
                    type="text"
                    value={config.contact.instagram}
                    onChange={(e) => updateNested(['contact', 'instagram'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">GitHub</label>
                  <input
                    type="text"
                    value={config.contact.github}
                    onChange={(e) => updateNested(['contact', 'github'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">LinkedIn</label>
                  <input
                    type="text"
                    value={config.contact.linkedin}
                    onChange={(e) => updateNested(['contact', 'linkedin'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Website</label>
                  <input
                    type="text"
                    value={config.contact.website}
                    onChange={(e) => updateNested(['contact', 'website'], e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Photography Tab */}
          {activeTab === 'photography' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Layanan Fotografi</h2>
              <div className="space-y-4">
                {config.photography.services.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 rounded-lg border border-border bg-background space-y-3"
                  >
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => {
                        const updated = config.photography.services.map((s) =>
                          s.id === service.id ? { ...s, title: e.target.value } : s
                        )
                        setConfig({ ...config, photography: { ...config.photography, services: updated } })
                      }}
                      placeholder="Judul layanan"
                      className="w-full px-3 py-2 rounded border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                      value={service.description}
                      onChange={(e) => {
                        const updated = config.photography.services.map((s) =>
                          s.id === service.id ? { ...s, description: e.target.value } : s
                        )
                        setConfig({ ...config, photography: { ...config.photography, services: updated } })
                      }}
                      placeholder="Deskripsi layanan"
                      rows={2}
                      className="w-full px-3 py-2 rounded border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs would follow similar patterns */}
          {activeTab === 'technology' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Teknologi</h2>
              <p className="text-muted-foreground mb-4">Edit teknologi yang Anda kuasai</p>
              {['frontend', 'backend', 'iot', 'tools'].map((category) => (
                <div key={category}>
                  <label className="block text-sm font-medium text-foreground mb-2 capitalize">
                    {category === 'iot' ? 'IoT' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                  <input
                    type="text"
                    value={config.technologies[category as keyof typeof config.technologies].join(', ')}
                    onChange={(e) => {
                      updateNested(
                        ['technologies', category],
                        e.target.value.split(',').map((s) => s.trim())
                      )
                    }}
                    placeholder="Pisahkan dengan koma"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Placeholder for other tabs */}
          {['projects', 'business', 'sustainability'].includes(activeTab) && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Section {activeTab} - Coming soon</p>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-all"
          >
            {isSaved ? (
              <>
                <Check className="size-4" />
                Tersimpan!
              </>
            ) : (
              <>
                <Save className="size-4" />
                Simpan Perubahan
              </>
            )}
          </button>

          <button
            onClick={handleCopyCode}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground hover:border-primary transition-all"
          >
            {copied ? (
              <>
                <Check className="size-4" />
                Tersalin!
              </>
            ) : (
              <>
                <Copy className="size-4" />
                Salin Kode
              </>
            )}
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-6 rounded-lg bg-secondary border border-border">
          <h3 className="font-semibold text-foreground mb-2">💡 Petunjuk</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Semua perubahan disimpan ke localStorage untuk demo</li>
            <li>• Untuk deployment, copy kode dan update file lib/config.ts</li>
            <li>• Upload foto profil ke folder /public/images/</li>
            <li>• Refresh halaman untuk melihat perubahan di preview</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
