import React from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';

const projectsList = [
    {
        title: "PPID Kota Payakumbuh",
        category: "Pejabat Pengelola Informasi dan Dokumentasi",
        description: "Platform resmi keterbukaan informasi publik daerah.",
        achievements: [
            "Merombak dan mengoptimalkan alur proses bisnis permohonan informasi publik agar lebih efisien dan terstruktur."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
        link: "https://ppid.payakumbuhkota.go.id"
    },
    {
        title: "SPPS (Perjalanan Dinas)",
        category: "BKPSDM - Web & Mobile API",
        description: "Sistem pengajuan administrasi perjalanan dinas pegawai.",
        achievements: [
            "Menyesuaikan alur disposisi surat tugas dengan regulasi Perwako terbaru dan membangun RESTful API untuk integrasi aplikasi mobile."
        ],
        technologies: ["Laravel", "REST API", "MySQL", "Bootstrap", "Laravel Schedule"],
        link: "#"
    },
    {
        title: "E-KKPR",
        category: "Dinas PUPR - Tata Ruang & Perizinan",
        description: "Aplikasi layanan Kesesuaian Kegiatan Pemanfaatan Ruang untuk izin berusaha.",
        achievements: [
            "Mengimplementasikan notifikasi real-time via WebSocket dan otomatisasi jadwal berkas menggunakan Laravel Schedule."
        ],
        technologies: ["Laravel", "Tailwind CSS", "WebSocket", "PostgreSQL"],
        link: "#"
    },
    {
        title: "SIGMA",
        category: "Manajemen Aset & Agraria",
        description: "Sistem monitoring dan pengurusan sertifikasi aset tanah pemda.",
        achievements: [
            "Membangun keseluruhan sistem dari awal (scratch) dengan integrasi WebSocket untuk pelacakan status sertifikasi secara real-time."
        ],
        technologies: ["Laravel", "WebSocket", "MySQL", "Bootstrap"],
        link: "#"
    },
    {
        title: "Disakola PPDB",
        category: "Dinas Pendidikan - PPDB Online",
        description: "Platform pendaftaran peserta didik baru tingkat SD dan SMP.",
        achievements: [
            "Menyesuaikan sistem dengan dinamika Juknis tahunan serta memitigasi serangan siber saat pendaftaran dengan sistem backup berkas eksternal."
        ],
        technologies: ["CodeIgniter", "PHP", "MySQL", "jQuery", "Bootstrap"],
        link: "#"
    },
    {
        title: "SIWARTA",
        category: "Sistem Informasi Wartawan",
        description: "Platform pendataan dan verifikasi mitra media pemerintah kota.",
        achievements: [
            "Mengembangkan manajemen data kemitraan dan verifikasi dokumen wartawan dengan performa kueri yang dioptimalkan."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        link: "#"
    },
    {
        title: "SIKOPAY (SAKINAH)",
        category: "E-Sakip & Kinerja Pegawai",
        description: "Sistem informasi akuntabilitas kinerja instansi pemerintah.",
        achievements: [
            "Menerapkan arsitektur terpisah (decoupled) menggunakan Laravel API di backend dan React.js di frontend untuk dashboard kinerja."
        ],
        technologies: ["Laravel", "React.js", "REST API", "PostgreSQL", "Tailwind CSS"],
        link: "#"
    },
    {
        title: "SIJUARA",
        category: "BKD - Pengajuan Standar Harga Satuan",
        description: "Sistem pengajuan dan verifikasi standar harga belanja daerah.",
        achievements: [
            "Membangun alur pengajuan berjenjang dengan validasi ketat untuk mencegah duplikasi dan kesalahan nominal anggaran."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "jQuery", "Bootstrap"],
        link: "#"
    }
];

const Projects = ({ darkMode }) => {
    return (
        <section
            id="projects"
            className={`min-h-screen py-24 px-6 transition-colors duration-300 ${
                darkMode ? 'bg-[#09090d] text-white' : 'bg-gray-100 text-gray-900'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-3">
                        Proyek Unggulan
                    </h2>
                    <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Kumpulan proyek sistem informasi dan aplikasi web instansi pemerintahan yang pernah dikembangkan.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsList.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-between rounded-[28px] border p-7 transition-all duration-300 hover:scale-[1.02] ${
                                darkMode
                                    ? 'border-white/10 bg-[#151519] hover:border-violet-500/50'
                                    : 'border-gray-200 bg-white shadow-md hover:border-violet-500/50'
                            }`}
                        >
                            <div>
                                {/* Top Banner/Card Header */}
                                <div className="relative mb-6 h-32 w-full rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                                    <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />
                                    <span className="font-mono text-xs tracking-[0.2em] text-white/80 uppercase">
                                        PEMERINTAH KOTA
                                    </span>
                                    <h3 className="font-serif text-lg md:text-xl font-bold text-white leading-snug">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Project Subtitle/Name */}
                                <div className="mb-3">
                                    <h4 className="text-base font-semibold mb-1">
                                        {project.title}
                                    </h4>
                                    <p className="text-xs font-mono text-violet-400">
                                        {project.category}
                                    </p>
                                </div>

                                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>

                                {/* Achievements / Responsibilities */}
                                <div className="space-y-2 mb-6">
                                    <p className="font-mono text-[11px] tracking-wider text-gray-400 uppercase">
                                    PENCAPAIAN UTAMA
                                    </p>
                                    {project.achievements.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                                            <span className={`text-xs md:text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                                    {project.technologies.map((tech, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className={`rounded-full px-3 py-1 font-mono text-[11px] ${
                                                darkMode
                                                    ? 'bg-white/5 text-gray-300 border border-white/10'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Button */}
                                {project.link !== "#" ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full rounded-xl bg-violet-600/10 hover:bg-violet-600 hover:text-white text-violet-400 py-2.5 text-sm font-semibold transition-all duration-300"
                                    >
                                        <span>Kunjungi Situs</span>
                                        <ExternalLink size={16} />
                                    </a>
                                ) : (
                                    <div className="text-center font-mono text-[11px] text-gray-500 py-2">
                                        Internal Government System
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;