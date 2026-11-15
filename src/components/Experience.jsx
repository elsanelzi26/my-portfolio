import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const experiences = [
    {
        role: "Web Programmer",
        company: "Dinas Komunikasi dan Informatika Kota Payakumbuh",
        period: "2022 - Sekarang",
        description: "Bertanggung jawab dalam pengembangan, pemeliharaan, serta pengelolaan sistem aplikasi web untuk mendukung kebutuhan digitalisasi instansi pemerintahan.",
        achievements: [
            "Melakukan deployment dan pemeliharaan aplikasi web di server produksi, serta memecahkan masalah teknis untuk memastikan keandalan aplikasi.",
            "Mengembangkan aplikasi web dari awal sesuai kebutuhan operasional instansi pemerintahan.",
            "Mengambil alih dan merawat aplikasi yang sudah ada, mengembangkan fitur baru, memodifikasi alur kerja bisnis, serta memperbaiki bug.",
            "Merancang struktur basis data, mengembangkan fungsionalitas backend dan frontend, serta mengintegrasikan layanan antar sistem.",
            "Mereplikasi dan menyesuaikan aplikasi web berdasarkan Petunjuk Teknis (Juknis) serta berbagai kebutuhan spesifik instansi daerah.",
            "Berkolaborasi dengan tim pengembang dan pemangku kepentingan pemerintahan untuk menganalisis kebutuhan serta menerapkan solusi teknis."
        ]
    },
    {
        role: "Freelance Web Developer",
        company: "Rise Dev Team",
        period: "2021 - 2022",
        description: "Berkolaborasi dalam tim pengembang independen untuk merancang dan membangun berbagai aplikasi web kustom sesuai kebutuhan proyek dan klien mahasiswa.",
        achievements: [
            "Bekerja sama dengan tim developer dalam merancang arsitektur sistem dan struktur basis data yang sesuai dengan spesifikasi kebutuhan klien.",
            "Mengembangkan fitur-fitur utama aplikasi web secara menyeluruh mulai dari perancangan antarmuka hingga logika pemrosesan data.",
            "Menerjemahkan studi kasus dan alur bisnis klien ke dalam sistem informasi berbasis web yang terstruktur dan mudah digunakan.",
            "Melakukan pengujian fungsional, perbaikan bug, serta mendampingi proses penyesuaian fitur hingga aplikasi siap digunakan."
        ]
    },
    {
        role: "Web Developer",
        company: "CV Mediatama Web Indonesia",
        period: "Jan 2021 - Maret 2021",
        description: "Mengembangkan berbagai solusi web kustom bagi klien serta mendampingi proses pembelajaran dasar pemrograman.",
        achievements: [
            "Mengembangkan aplikasi web kustom untuk memenuhi berbagai kebutuhan operasional klien.",
            "Mengajar kelas privat pengembangan web dan membimbing siswa memahami dasar-dasar pemrograman secara praktis."
        ]
    }
];

const Experience = ({ darkMode }) => {
    return (
        <section
            id="experience"
            className={`min-h-screen py-24 px-6 transition-colors duration-300 ${
                darkMode ? 'bg-[#09090d] text-white' : 'bg-gray-100 text-gray-900'
            }`}
        >
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-3">
                        Pengalaman
                    </h2>
                    <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Perjalanan profesional dan kontribusi utama dalam pengembangan sistem.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative border-l border-violet-500/30 ml-4 md:ml-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-10">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-violet-500 ring-4 ring-[#09090d]" />

                            {/* Card Content */}
                            <div
                                className={`rounded-[24px] border p-6 md:p-8 transition-all duration-300 ${
                                    darkMode
                                        ? 'border-white/10 bg-[#151519] hover:border-violet-500/50'
                                        : 'border-gray-200 bg-white shadow-sm hover:border-violet-500/50'
                                }`}
                            >
                                <h3 className="text-xl md:text-2xl font-bold mb-1">
                                    {exp.role}
                                </h3>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 font-mono text-sm text-violet-400">
                                    <span>{exp.company}</span>
                                    <span>{exp.period}</span>
                                </div>

                                <p className={`text-sm md:text-base mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {exp.description}
                                </p>

                                <div className="space-y-3">
                                    <p className="font-mono text-xs tracking-wider text-gray-400 uppercase">
                                        TANGGUNG JAWAB UTAMA
                                    </p>
                                    {exp.achievements.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                                            <span className={`text-sm md:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;