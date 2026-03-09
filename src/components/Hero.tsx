function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
      </div>

      <div className="hero-content">
        <p className="hero-label">Portfolio</p>

        <h1 className="hero-title">
          Grace Hwang
        </h1>

        <h2 className="hero-heading">
          UX-driven frontend developer
          <br />
          building thoughtful digital products
        </h2>

        <p className="hero-subtitle">
         Design and Develop Clean, intuitive web experiences with a focus on
          product clarity, subtle interaction, and modern frontend engineering.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button hero-button-primary">
            View Projects
          </a>

          <a href="#about" className="hero-button hero-button-secondary">
            About Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero