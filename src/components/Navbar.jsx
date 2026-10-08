import { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="navbar">
      <a href="#top" className={`logo ${scrolled ? 'logo-hidden' : ''}`}>
        KAAN KARAKUS
      </a>

      <div className="nav-links">
        <a href="#about">Über mich</a>
        <a href="#projects">Projekte</a>
        <a href="#contact">Kontakt</a>
      </div>
    </nav>
  )
}

export default Navbar