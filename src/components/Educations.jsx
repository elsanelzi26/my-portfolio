
import { GraduationCap } from 'lucide-react'

const educationData = [
    {
        date: 'OKT 2024 - JAN 2026',
        degree: 'S1 Sistem Informasi',
        university: 'Universitas Metamedia',
        gpa: '3.76',
        logo: '/images/metamedia1.png',
    },
    {
        date: 'SEP 2018 - OKT 2021',
        degree: 'D3 Manajemen Informatika',
        university: 'Politeknik Negeri Padang',
        gpa: '3.77',
        logo: '/images/pnp1.png',
    },
]

function Educations({ darkMode }) {
    return (
        <section
            id="educations"
            className={`min-h-screen px-6 py-28 transition-colors duration-300 ${darkMode
                    ? 'bg-[#09090d] text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
        >
            <div className="mx-auto max-w-4xl">

                {/* Title */}
                <div className="mb-14 text-center">
                    <h2 className="font-serif text-4xl font-bold md:text-5xl">
                        Pendidikan
                    </h2>

                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-violet-600" />
                </div>

                {/* Timeline */}
                <div className="relative">

                    <div
                        className={`absolute bottom-4 left-7 top-4 w-0.5 ${darkMode ? 'bg-white/10' : 'bg-gray-300'
                            }`}
                    />

                    <div className="space-y-10">
                        {educationData.map((education, index) => (
                            <div
                                key={index}
                                className="relative flex items-start gap-6"
                            >

                                {/* University Logo */}
                                <div
                                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border p-2 shadow-md ${darkMode
                                            ? 'border-white/10 bg-[#1c1c22]'
                                            : 'border-gray-200 bg-white'
                                        }`}
                                >
                                    <img
                                        src={education.logo}
                                        alt={`Logo ${education.university}`}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                {/* Card */}
                                <div
                                    className={`min-w-0 flex-1 rounded-2xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 md:p-8 ${darkMode
                                            ? 'border-white/10 bg-[#151519]'
                                            : 'border-gray-200 bg-white'
                                        }`}
                                >
                                    <p className="mb-3 font-mono text-sm tracking-widest text-violet-500">
                                        {education.date}
                                    </p>

                                    <h3 className="mb-2 font-serif text-xl font-bold md:text-2xl">
                                        {education.degree}
                                    </h3>

                                    <p className="mb-4 text-lg font-semibold text-violet-600">
                                        {education.university}
                                    </p>

                                    <p
                                        className={
                                            darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }
                                    >
                                        GPA : {education.gpa}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Educations
