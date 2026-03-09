function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <p className="contact-label">Contact</p>

        <h2 className="contact-title">
          Let’s build something
          <br />
          thoughtful together
        </h2>

        <p className="contact-description">
          I am open to frontend, UX & UI-focused, and product-oriented opportunities.
          If you would like to connect, collaborate, or discuss a role, feel
          free to reach out.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:hse.merrit.23@gmail.com"
            className="contact-button contact-button-primary"
          >
            Email Me
          </a>

          <a
            href="https://github.com/MerrIT-dev"
            target="_blank"
            rel="noreferrer"
            className="contact-button contact-button-secondary"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/seongeunhwang"
            target="_blank"
            rel="noreferrer"
            className="contact-button contact-button-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact