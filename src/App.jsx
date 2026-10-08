import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/footer'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App