function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <p className="about-label">About</p>
          <h2 className="about-title">
            Product-minded frontend developer
            <br />
            with a strong UX perspective
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-text">
            <p>
              I am a Computer Science graduate at Queensland University of Technology focused on building digital
              products that feel useful, clean and visually thoughtful.
            </p>

            <p>
              My work sits between frontend engineering and user experience. I
              enjoy turning unique ideas into structured interfaces with clean
              interaction, strong visual hierarchy, and product-focused
              thinking.
            </p>

            <p>
              I am especially interested in modern web applications built with
              React, TypeScript, and design systems that support intuitive user
              experiences.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-card">
              <p className="about-card-label">Core Stack</p>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="about-card">
              <p className="about-card-label">Focus</p>
              <ul>
                <li>Frontend Development</li>
                <li>UX Thinking</li>
                <li>Product Design Sense</li>
                <li>Responsive UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About