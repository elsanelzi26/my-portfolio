import React from 'react';

function Skills({ darkMode }) {
    const skillCategories = [
        {
            title: 'Bahasa & Database',
            skills: [
                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' }
            ],
        },
        {
            title: 'Framework & Teknologi',
            skills: [
                { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
                { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg' },
                { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
                { name: 'Websocket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg' },
            ],
        },
        {
            title: 'Tools & Platform',
            skills: [
                { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
                { name: 'SQLyog', icon: 'https://placehold.co/64x64/005A9C/ffffff?text=SQLyog&font=roboto' },
                { name: 'XAMPP', icon: 'https://placehold.co/64x64/FB7A24/ffffff?text=XAMPP&font=roboto' },
                { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
                { name: 'Insomnia', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg' },
                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                { name: 'pgAdmin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                { name: 'HeidiSQL', icon: 'https://placehold.co/64x64/E34F26/ffffff?text=HeidiSQL&font=roboto' },
                { name: 'QGIS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg' },
                { name: 'Jira/Agile Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
                { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg' },
                { name: 'Xmind', icon: 'https://placehold.co/64x64/5C2D91/ffffff?text=Xmind&font=roboto' },
                { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
                {
                    name: 'Antigravity',
                    customIcon: (
                        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
                            <defs>
                                <linearGradient id="ag-grad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="50%" stopColor="#8B5CF6" />
                                    <stop offset="100%" stopColor="#EC4899" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M32 10L12 52H22L32 30L42 52H52L32 10Z"
                                fill="url(#ag-grad)"
                            />
                            <path
                                d="M23 41H41L37 48H27L23 41Z"
                                fill="url(#ag-grad)"
                                opacity="0.75"
                            />
                        </svg>
                    ),
                },
                {
                    name: 'Kilo Code',
                    customIcon: (
                        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
                            <rect x="6" y="6" width="52" height="52" rx="14" fill="#FACC15" />
                            <path
                                d="M22 19V45M22 32L35 19M27 27L37 45"
                                stroke="#18181B"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle cx="43" cy="22" r="3" fill="#18181B" />
                        </svg>
                    ),
                },
            ],
        },
        {
            title: 'Soft Skills',
            skills: [
                { name: 'Analytical Thinking', icon: 'https://cdn-icons-png.flaticon.com/512/2058/2058148.png' },
                { name: 'Collaboration', icon: 'https://cdn-icons-png.flaticon.com/512/1534/1534938.png' },
                { name: 'Continous Learning', icon: 'https://cdn-icons-png.flaticon.com/512/2436/2436874.png' },
                { name: 'Time Management', icon: 'https://cdn-icons-png.flaticon.com/512/2693/2693507.png' },
                { name: 'Communication', icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050525.png' },
                { name: 'Quality & Detail Orientation', icon: 'https://cdn-icons-png.flaticon.com/512/1584/1584892.png' },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className={`min-h-screen py-20 px-6 md:px-16 transition-colors duration-300 ${
                darkMode ? 'bg-slate-900 text-gray-100' : 'bg-[#f4f2f8] text-gray-800'
            }`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2
                        className={`text-4xl font-serif font-bold tracking-wide ${
                            darkMode ? 'text-gray-200' : 'text-gray-400'
                        }`}
                    >
                        Skill
                    </h2>
                    <div className="w-12 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
                </div>

                <div
                    className={`rounded-2xl p-6 md:p-8 mb-10 shadow-sm transition-colors duration-300 ${
                        darkMode ? 'bg-slate-800 text-gray-300' : 'bg-white text-gray-600'
                    }`}
                >
                    <p className="text-base md:text-lg leading-relaxed">
                        Saya senang mempelajari hal-hal baru dan bereksperimen dengan teknologi baru. Berikut adalah beberapa bahasa, teknologi, perangkat, dan platform utama yang pernah saya gunakan:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md ${
                                darkMode ? 'bg-slate-800' : 'bg-white'
                            }`}
                        >
                            <h3
                                className={`text-xl font-serif font-bold mb-8 ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center justify-start text-center group"
                                    >
                                        <div className="w-12 h-12 mb-3 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                                            {skill.customIcon ? (
                                                skill.customIcon
                                            ) : (
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className={`w-full h-full object-contain ${
                                                        darkMode && (skill.name === 'Websocket' || skill.name === 'GitHub')
                                                            ? 'invert'
                                                            : ''
                                                    }`}
                                                />
                                            )}
                                        </div>
                                        <span
                                            className={`text-xs font-medium leading-tight ${
                                                darkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}
                                        >
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;