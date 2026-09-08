/**
 * Data terpusat untuk Portfolio Wisnu Dwi Haryanto
 */

export const profileData = {
  name: 'Wisnu Dwi Haryanto',
  role: 'Creative Developer & Designer',
  tagline: 'Crafting interactive mobile apps, games, web backends, and digital experiences.',
  bio: 'Saya adalah seorang developer yang berfokus pada pengembangan aplikasi mobile, game interaktif, arsitektur web backend, serta desain UI/UX dan digital art. Memadukan logika teknis yang solid dengan sentuhan estetika visual yang rapi.',
  location: 'Indonesia',
  phone: '087835776271',
  phoneFormatted: '+62 878-3577-6271',
  email: 'wisnudwiharyanto@gmail.com',
  github: 'https://github.com/wisnu19092004?tab=repositories',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  photoUrl: './src/assets/wisnu-profile.jpg'
};

export const skillsData = [
  // Mobile & Game Dev
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'mobile-game',
    categoryLabel: 'Mobile & Game Dev',
    level: 4,
    description: 'Cross-platform mobile apps for Android & iOS with custom UI and state management.',
    icon: 'smartphone',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'dart',
    name: 'Dart',
    category: 'mobile-game',
    categoryLabel: 'Mobile & Game Dev',
    level: 3,
    description: 'Object-oriented programming, asynchronous streams, and reactive logic.',
    icon: 'code-2',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'unity',
    name: 'Unity',
    category: 'mobile-game',
    categoryLabel: 'Mobile & Game Dev',
    level: 3,
    description: '2D/3D game mechanics, physics, scene management, and interactive gameplay.',
    icon: 'gamepad-2',
    color: 'from-slate-400 to-slate-200'
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'mobile-game',
    categoryLabel: 'Mobile & Game Dev',
    level: 3,
    description: 'Game scripting in Unity, backend development, and object-oriented architectures.',
    icon: 'hash',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'mobile-game',
    categoryLabel: 'Mobile & Game Dev',
    level: 3,
    description: 'Algorithmic efficiency, memory management, and high-performance game logic.',
    icon: 'cpu',
    color: 'from-blue-600 to-indigo-600'
  },

  // Web & Backend Dev
  {
    id: 'codeigniter',
    name: 'CodeIgniter',
    category: 'web-backend',
    categoryLabel: 'Web & Backend',
    level: 3,
    description: 'MVC architecture, RESTful API endpoints, CRUD systems, and database handling.',
    icon: 'server',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'web-backend',
    categoryLabel: 'Web & Backend',
    level: 3,
    description: 'Relational database schema design, complex joins, query optimization, and indexing.',
    icon: 'database',
    color: 'from-sky-500 to-blue-600'
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'web-backend',
    categoryLabel: 'Web & Backend',
    level: 3,
    description: 'Semantic HTML5 structure, accessible markup, and modern SEO best practices.',
    icon: 'layout',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'web-backend',
    categoryLabel: 'Web & Backend',
    level: 2,
    description: 'DOM manipulation, ES6+ syntax, asynchronous programming, and client/server scripts.',
    icon: 'file-code',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'web-backend',
    categoryLabel: 'Web & Backend',
    level: 2,
    description: 'Flexbox, CSS Grid, responsive design, animations, and Tailwind styling.',
    icon: 'palette',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'web-backend',
    categoryLabel: 'Web & Backend',
    level: 2,
    description: 'Routing, Eloquent ORM, Blade templating, authentication, and API development.',
    icon: 'layers',
    color: 'from-red-500 to-rose-600'
  },

  // Design, 2D & 3D Tools
  {
    id: 'figma',
    name: 'Figma',
    category: 'design-3d',
    categoryLabel: 'Design & Visual',
    level: 4,
    description: 'UI/UX interface design, wireframing, high-fidelity prototypes, and design systems.',
    icon: 'figma',
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 'krita',
    name: 'Krita',
    category: 'design-3d',
    categoryLabel: 'Design & Visual',
    level: 4,
    description: 'Digital illustration, 2D game asset creation, sprite painting, and concept art.',
    icon: 'brush',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'blender',
    name: 'Blender',
    category: 'design-3d',
    categoryLabel: 'Design & Visual',
    level: 1,
    description: 'Basic 3D object modeling, viewport navigation, and asset exporting.',
    icon: 'box',
    color: 'from-amber-500 to-orange-600'
  }
];

export const projectsData = [
  {
    id: 'game-dual-clash',
    title: 'Dual Clash: Chess & Shogi Strategy Arena',
    category: 'game',
    tags: ['Web Game', 'Chess', 'Shogi', 'AI Bot', 'Multiplayer (P2P/Room)', 'Dark/Light Theme', 'Multi-Language'],
    description: 'Game arena strategi papan interaktif yang menggabungkan Catur Klasik Barat (8x8) dan Shogi Tradisional Jepang (9x9). Dilengkapi dengan Mode Lawan AI Bot (berbagai level ELO), Mode Mabar Online & Pass & Play lokal, Laporan Evaluasi Langkah (Akurasi & Blunder), Ensiklopedia Panduan Bidak lengkap, Papan Peringkat Global, serta dukungan multi-bahasa.',
    imagePlaceholderText: 'Dual Clash (Catur & Shogi)',
    badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    coverImage: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222309.png',
    screenshots: [
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222309.png',
        title: 'Halaman Utama Arena Permainan'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222327.png',
        title: 'Gameplay Catur Klasik vs Intermediate Bot'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222355.png',
        title: 'Laporan Evaluasi & Analisis Akurasi Permainan'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222415.png',
        title: 'Pengaturan Permainan Shogi & Pilihan Bot / Sisi'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222435.png',
        title: 'Fitur Mabar Online Multi-Device & Kode Room'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222452.png',
        title: 'Gameplay Shogi Jepang 9x9 vs Intermediate Bot'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222516.png',
        title: 'Riwayat Pertandingan & Rekam Jejak ELO'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222528.png',
        title: 'Modal Masuk & Autentikasi Pengguna'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222540.png',
        title: 'Panduan & Ensiklopedia Gerakan Bidak Catur'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222549.png',
        title: 'Panduan Aturan & Promosi Bidak Shogi'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222602.png',
        title: 'Papan Peringkat Global Catur & Shogi'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222615.png',
        title: 'Halaman Profil Pengguna & Statistik (Dark Mode)'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222626.png',
        title: 'Tampilan Profil Pengguna (Light Mode)'
      },
      {
        url: '/Gambar/Game Dual Clash/Screenshot 2026-09-08 222641.png',
        title: 'Pengaturan Multi-Bahasa (ID, EN, JA, MS)'
      }
    ],
    demoUrl: null,
    githubUrl: 'https://github.com/wisnu19092004?tab=repositories'
  },
  {
    id: 'flutter-ecommerce',
    title: 'Cross-Platform Mobile Store App',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Figma'],
    description: 'A responsive mobile e-commerce application featuring smooth transitions, state management, and an intuitive UI prototype designed in Figma.',
    imagePlaceholderText: 'Flutter Mobile App',
    badgeColor: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/30',
    demoUrl: '#',
    githubUrl: 'https://github.com/wisnu19092004?tab=repositories'
  },
  {
    id: 'unity-adventure-game',
    title: '2D Action Adventure Platformer',
    category: 'game',
    tags: ['Unity', 'C#', 'Krita'],
    description: 'A 2D platformer game built with custom physics, enemy AI, and original sprite artwork illustrated with Krita.',
    imagePlaceholderText: 'Unity 2D Game Project',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    demoUrl: '#',
    githubUrl: 'https://github.com/wisnu19092004?tab=repositories'
  },
  {
    id: 'codeigniter-inventory-system',
    title: 'Enterprise Inventory Management',
    category: 'web',
    tags: ['CodeIgniter', 'SQL', 'Bootstrap/CSS'],
    description: 'A full-fledged inventory tracking web portal with role-based access control, relational database management, and PDF report export.',
    imagePlaceholderText: 'CodeIgniter Web System',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    demoUrl: '#',
    githubUrl: 'https://github.com/wisnu19092004?tab=repositories'
  },
  {
    id: 'laravel-rest-api',
    title: 'Modern RESTful API Service',
    category: 'web',
    tags: ['Laravel', 'SQL', 'JavaScript'],
    description: 'Robust backend API with token authentication, query filtering, and high security for client integration.',
    imagePlaceholderText: 'Laravel API Backend',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30',
    demoUrl: '#',
    githubUrl: 'https://github.com/wisnu19092004?tab=repositories'
  },
  {
    id: 'figma-design-system',
    title: 'E-Learning Platform UI/UX Design',
    category: 'design',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    description: 'Comprehensive UI design kit and interactive prototype for an online learning management system.',
    imagePlaceholderText: 'Figma UI/UX Showcase',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    demoUrl: '#',
    githubUrl: 'https://github.com/wisnu19092004?tab=repositories'
  }
];
