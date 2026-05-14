// Portfolio Configuration - Update ini untuk mengubah konten portofolio Anda
export const portfolioConfig = {
  // Profile Information
  profile: {
    name: 'Huda Muhammad Nur Fauzi',
    title: 'Kreator Lintas Disiplin',
    subtitle: 'Fotografi • Teknologi • Keberlanjutan',
    bio: 'Seorang kreator lintas disiplin dari Garut, Jawa Barat. Memadukan seni fotografi profesional, rekayasa teknologi fullstack & IoT, dengan komitmen terhadap gaya hidup berkelanjutan dan ketahanan pangan.',
    location: 'Garut, Jawa Barat, Indonesia',
    profileImage: 'https://i.ibb.co/YTRMybH6/Whats-App-Image-2024-11-22-at-10-05-59.jpg', // Update dengan URL foto profil Anda
  },

  // Contact Information
  contact: {
    email: 'huda@example.com',
    phone: '+62 812-3456-7890',
    instagram: 'https://instagram.com/hudanur',
    github: 'https://github.com/hudanur',
    linkedin: 'https://linkedin.com/in/hudanur',
    website: 'https://hudanur.com',
    address: 'Garut, Jawa Barat',
  },

  // Photography Services
  photography: {
    services: [
      {
        id: 1,
        title: 'Wedding Photography',
        description: 'Dokumentasi pernikahan profesional dengan gaya natural & artistik',
        icon: '📸',
      },
      {
        id: 2,
        title: 'Commercial Photography',
        description: 'Fotografi produk & commercial untuk kebutuhan bisnis Anda',
        icon: '🏢',
      },
      {
        id: 3,
        title: 'Event Coverage',
        description: 'Dokumentasi event, acara, & gathering dengan detail sempurna',
        icon: '🎉',
      },
      {
        id: 4,
        title: 'Portrait Session',
        description: 'Sesi portrait profesional untuk personal branding Anda',
        icon: '👤',
      },
    ],
  },

  // Technology Skills
  technologies: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'API REST'],
    iot: ['Arduino', 'Raspberry Pi', 'IoT Sensors', 'MQTT', 'IoT Platform'],
    tools: ['Git', 'Docker', 'Vercel', 'AWS', 'VS Code'],
  },

  // Projects
  projects: [
    {
      id: 1,
      title: 'Aquaponik Smart System',
      description: 'Sistem aquaponik terintegrasi dengan sensor IoT & dashboard monitoring real-time',
      category: 'IoT & Sustainability',
      image: '/placeholder.svg?height=300&width=400',
      link: '#',
      technologies: ['Arduino', 'React', 'MongoDB', 'MQTT'],
    },
    {
      id: 2,
      title: 'Wedding Portfolio Website',
      description: 'Website portofolio fotografi dengan galeri interaktif & booking system',
      category: 'Web Development',
      image: '/placeholder.svg?height=300&width=400',
      link: '#',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'IoT Greenhouse Monitor',
      description: 'Monitoring sistem greenhouse dengan real-time alerts & data analytics',
      category: 'IoT',
      image: '/placeholder.svg?height=300&width=400',
      link: '#',
      technologies: ['Raspberry Pi', 'Python', 'React', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'Sustainable Living App',
      description: 'Aplikasi mobile untuk tracking carbon footprint & sustainable tips',
      category: 'Sustainability',
      image: '/placeholder.svg?height=300&width=400',
      link: '#',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
    },
  ],

  // Business/Services
  business: {
    title: 'Bisnis & Layanan',
    description: 'Kami menawarkan berbagai layanan kreatif dan teknologi untuk kebutuhan Anda',
    services: [
      {
        id: 1,
        title: 'Fotografi Profesional',
        description: 'Jasa fotografi untuk wedding, komersial, event, dan personal branding',
        icon: '📷',
      },
      {
        id: 2,
        title: 'Pengembangan Web',
        description: 'Pembuatan website modern & responsive dengan teknologi terkini',
        icon: '💻',
      },
      {
        id: 3,
        title: 'Solusi IoT',
        description: 'Implementasi sistem IoT untuk automasi & monitoring bisnis Anda',
        icon: '🔌',
      },
      {
        id: 4,
        title: 'Konsultasi Sustainability',
        description: 'Konsultasi untuk transformasi digital ramah lingkungan',
        icon: '🌱',
      },
    ],
  },

  // Sustainability Initiatives
  sustainability: {
    title: 'Komitmen Keberlanjutan',
    initiatives: [
      {
        id: 1,
        title: 'Aquaponik & Urban Farming',
        description: 'Sistem pertanian berkelanjutan di area urban dengan teknologi IoT',
        impact: 'Menghasilkan 50+ kg sayuran organik per tahun',
      },
      {
        id: 2,
        title: 'Pendidikan Lingkungan',
        description: 'Workshop & edukasi tentang sustainability untuk komunitas lokal',
        impact: 'Telah melatih 100+ peserta tentang pertanian berkelanjutan',
      },
      {
        id: 3,
        title: 'Green Tech Innovation',
        description: 'Inovasi teknologi hijau untuk mengurangi jejak karbon',
        impact: 'Implementasi di 5+ komunitas lokal',
      },
    ],
  },

  // Social Media Links (untuk footer & navbar)
  social: [
    { platform: 'Instagram', url: 'https://instagram.com/hudanur', icon: '📷' },
    { platform: 'GitHub', url: 'https://github.com/hudanur', icon: '💻' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/hudanur', icon: '💼' },
    { platform: 'Email', url: 'mailto:huda@example.com', icon: '✉️' },
  ],

  // Call to Action
  cta: {
    primary: 'Hubungi Saya',
    secondary: 'Lihat Portofolio',
  },
}
