import React, { useState, useEffect } from 'react';
import {
    Mail,
    ArrowRight,
} from 'lucide-react';

const roles = ["Web Programmer"];

const Hero = ({ darkMode, setActivePage }) => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const fullText = roles[currentRoleIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                setDisplayedText(fullText.substring(0, displayedText.length + 1));
                
                if (displayedText === fullText) {
                    setTimeout(() => setIsDeleting(true), 1500);
                    setTypingSpeed(100);
                }
            } else {
                setDisplayedText(fullText.substring(0, displayedText.length - 1));
                
                if (displayedText === "") {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    setTypingSpeed(150);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

    // Fungsi pembantu untuk navigasi dan scroll ke atas
    const handleNavClick = (page) => {
        setActivePage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className={`min-h-screen px-6 pt-32 pb-20 transition-colors duration-300 ${darkMode
                    ? 'bg-[#09090d] text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-3">

                {/* Main Hero Card */}
                <div className="relative flex min-h-[390px] flex-col justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[#151519] p-8 md:p-12 lg:col-span-2">

                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

                    <div className="relative z-10">
                        <div className="mb-7 flex items-center gap-3 font-mono text-sm tracking-[0.25em] text-violet-400">
                            <span className="h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa]" />
                            OPEN TO COLLABORATIONS
                        </div>

                        <h1 className="mb-5 font-serif text-5xl leading-tight tracking-tight text-white md:text-7xl">
                            Elsa Nelzi
                        </h1>

                        <p className="mb-8 text-lg text-gray-400 md:text-2xl">
                            I'm a{' '}
                            <span className="font-semibold text-white border-r-2 border-violet-400 pr-1 animate-pulse">
                                {displayedText}
                            </span>
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {/* Tombol View my work diarahkan ke halaman Proyek */}
                            <button
                                onClick={() => handleNavClick('projects')}
                                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-400 px-7 py-4 font-semibold text-white transition hover:scale-105 cursor-pointer"
                            >
                                View my work
                                <ArrowRight size={18} />
                            </button>

                            {/* Tombol About me diarahkan ke halaman Tentang */}
                            <button
                                onClick={() => handleNavClick('about')}
                                className="rounded-full border border-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/10 cursor-pointer"
                            >
                                About me
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Cards */}
                <div className="flex flex-col gap-5">

                    {/* Initial Card */}
                    <div className="flex min-h-[180px] flex-col justify-center rounded-[28px] bg-gradient-to-br from-violet-500 to-purple-400 p-10 text-white">
                        <h2 className="font-serif text-6xl font-bold">
                            EL
                        </h2>
                        <p className="mt-3 font-mono text-sm tracking-[0.2em] text-white/90">
                            WEB PROGRAMMER
                        </p>
                    </div>

                    {/* Social Card */}
                    <div className="flex min-h-[190px] flex-col justify-center rounded-[28px] border border-white/10 bg-[#151519] p-8">
                        <p className="mb-6 font-mono text-sm tracking-[0.2em] text-gray-400">
                            FIND ME
                        </p>

                        <div className="flex items-center gap-5">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/elsa-nelzi-1b598823a"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-black transition hover:scale-110"
                            >
                                in
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/elsanelzi26"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
                            >
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:elsanelzi7@gmail.com"
                                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
                            >
                                <Mail size={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;