
import { Code2, Menu, X, Sun, Moon } from 'lucide-react'
import { useState } from 'react'

function Navbar({
  darkMode,
  setDarkMode,
  activePage,
  setActivePage,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const menus = [
    { name: 'Beranda', page: 'home' },
    { name: 'Tentang', page: 'about' },
    { name: 'Skill', page: 'skills' },
    { name: 'Pendidikan', page: 'educations' },
    { name: 'Pengalaman', page: 'experience' },
    { name: 'Proyek', page: 'projects' },
    { name: 'Resume', page: 'resume' },
  ]

  const handleNavigation = (page) => {
    setActivePage(page)
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b backdrop-blur-xl ${
        darkMode
          ? 'border-white/10 bg-[#080b14]/90'
          : 'border-gray-200 bg-white/90'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">

        {/* Logo */}
        <button
          onClick={() => handleNavigation('home')}
          className={`flex items-center gap-2 text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          <Code2 className="text-violet-500" size={28} />
          Portofolio<span className="text-violet-500"></span>
        </button>

        {/* Desktop Menu */}
        <div className="ml-auto hidden items-center gap-5 lg:gap-6 md:flex">
          {menus.map((menu) => (
            <button
              key={menu.page}
              onClick={() => handleNavigation(menu.page)}
              className={`whitespace-nowrap border-b-2 py-1 text-sm transition ${
                activePage === menu.page
                  ? 'border-violet-500 text-violet-500'
                  : `border-transparent ${
                      darkMode
                        ? 'text-slate-400 hover:text-white'
                        : 'text-gray-600 hover:text-violet-500'
                    }`
              }`}
            >
              {menu.name}
            </button>
          ))}
        </div>

        {/* Theme & Mobile Menu */}
        <div className="ml-5 flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border ${
              darkMode
                ? 'border-white/10 text-yellow-400 hover:bg-white/10'
                : 'border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`flex flex-col gap-5 border-t px-6 py-6 md:hidden ${
            darkMode
              ? 'border-white/10 bg-[#080b14]'
              : 'border-gray-200 bg-white'
          }`}
        >
          {menus.map((menu) => (
            <button
              key={menu.page}
              onClick={() => handleNavigation(menu.page)}
              className={`text-left text-sm transition ${
                activePage === menu.page
                  ? 'font-bold text-violet-500'
                  : darkMode
                    ? 'text-slate-300'
                    : 'text-gray-700'
              }`}
            >
              {menu.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
