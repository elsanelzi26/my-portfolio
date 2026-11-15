import React from 'react';

function About({ darkMode }) {
  const highlights = [
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Full-Stack Development',
      desc: 'Berpengalaman membangun, merawat, dan mengembangkan aplikasi web menggunakan PHP, Laravel, CodeIgniter, dan React.js.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Business & Regulatory Workflow',
      desc: 'Berfokus pada adaptasi proses bisnis instansi/pemerintahan agar sesuai dengan regulasi dan berjalan efektif.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Optimization & Security',
      desc: 'Tertarik mendalami performa sistem, skalabilitas basis data, optimasi, dan aksesibilitas web modern.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Continuous Growth',
      desc: 'Selalu antusias mempelajari teknologi baru, mengasah keterampilan, dan mengambil tantangan pengembangan baru.',
    },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen py-20 px-6 md:px-16 transition-colors duration-300 flex items-center ${
        darkMode ? 'bg-slate-900 text-gray-100' : 'bg-[#f4f2f8] text-gray-800'
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Title */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-serif font-bold tracking-wide ${
              darkMode ? 'text-gray-200' : 'text-gray-400'
            }`}
          >
            Tentang Saya
          </h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div
          className={`rounded-3xl p-8 md:p-12 shadow-sm transition-colors duration-300 ${
            darkMode ? 'bg-slate-800 text-gray-300' : 'bg-white text-gray-600'
          }`}
        >
          {/* Grid Utama: Foto di Kiri, Teks Pengantar di Kanan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            
            {/* Kolom Foto Profil (Kiri - 4 Kolom) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                {/* Efek Bingkai Glow Ungu di Belakang Foto */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
                
                {/* Wadah Foto */}
                <div className={`relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-md border-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-white bg-gray-100'}`}>
                  {/* Ganti src di bawah dengan path gambar lokalmu, misal: /images/profile.jpg */}
                  <img
                    src="/images/profile.jpg"
                    // src="https://placehold.co/400x400/7c3aed/ffffff?text=Tya&font=roboto"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Kolom Teks Deskripsi (Kanan - 8 Kolom) */}
            <div className="lg:col-span-8 text-left">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple-600 uppercase bg-purple-100 dark:bg-purple-900/40 dark:text-purple-300 rounded-full">
              4+ Tahun Pengalaman
              </span>
              <p className="text-base md:text-lg leading-relaxed font-normal">
                Saya seorang <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Web Programmer</span> yang antusias dengan pengalaman lebih dari 4 tahun dalam mengembangkan, merawat, serta meningkatkan aplikasi web menggunakan PHP, Laravel, CodeIgniter, dan React.js.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-4">
                Pekerjaan saya berfokus pada pembangunan aplikasi, penyesuaian proses bisnis agar sesuai dengan regulasi, serta memastikan sistem berjalan secara efektif. Saya juga tertarik pada optimasi performa, aksesibilitas, dan teknologi web modern. Saya selalu antusias untuk belajar, mengasah keterampilan, dan mengambil tantangan pengembangan yang baru.
              </p>
            </div>

          </div>

          {/* Highlights Grid (Di Bawah) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-100 dark:border-slate-700">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 flex items-start gap-4 ${
                  darkMode ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-gray-50 hover:bg-purple-50/50'
                }`}
              >
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-sm shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`font-semibold text-base mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;