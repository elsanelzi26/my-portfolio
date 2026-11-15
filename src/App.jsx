
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Educations from './components/Educations'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Resume from './components/Resume'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activePage, setActivePage] = useState('home')

  const pages = {
    home: <Hero darkMode={darkMode} />,
    about: <About darkMode={darkMode} />,
    skills: <Skills darkMode={darkMode} />,
    educations: <Educations darkMode={darkMode} />,
    projects: <Projects darkMode={darkMode} />,
    experience: <Experience darkMode={darkMode} />,
    resume: <Resume darkMode={darkMode} />,
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? 'bg-[#09090d] text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main key={activePage}>
        {pages[activePage]}
      </main>
    </div>
  )
}

export default App
