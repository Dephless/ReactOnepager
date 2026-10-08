function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">SOFTWARE DEVELOPER</p>

        <h1>
          Ich entwickle
          <br />
          digitale Erlebnisse.
        </h1>

        <p className="hero-description">
          Willkommen auf meinem Onepager. Hier zeige ich meine Projekte,
          Skills und was mich als Developer ausmacht.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            Projekte ansehen
          </a>

          <a href="#contact" className="button secondary">
            Kontakt
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero