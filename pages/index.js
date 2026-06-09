import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Fade-in effect from script.js
    const fadeElements = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", () => {
      fadeElements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
          element.classList.add("show");
        }
      });
    });

    // Contact form submission
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
          });

          if (res.ok) {
            alert("Message sent!");
            e.target.reset();
          } else {
            const errorData = await res.json();
            alert("Failed: " + (errorData.error || "Unknown error"));
          }
        } catch (err) {
          alert("Network error — could not send message.");
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Miguel Kesego Keitseng | Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/assets/style.css" />

      </Head>

      {/* Navigation */}
      <header>
        <nav className="navbar">
          <div className="logo">Sir M.K. Keitseng&apos;s Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content fade-in">
          <h1>Miguel Kesego <span>Keitseng</span></h1>
          <h2>
            Aspiring Network Engineer and Data Analyst.<br />
            Main focus is on network engineering...
          </h2>
          <p>
            Building reliable infrastructure and elegant digital experiences from Botswana.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="image-card">
            <img src="/assets/miguel.jpg" alt="Miguel Kesego Keitseng" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-title">
          <h2>About Miguel</h2>
        </div>
        <div className="about-container">
          <div className="about-text fade-in">
            <h3>Curious by nature. Engineer by craft.</h3>
            <p>
              I&apos;m a passionate aspiring network engineer and data analyst...
            </p>
            <p>
              I&apos;m currently a student with goals of monitoring network performance...
            </p>
          </div>
          <div className="qualities fade-in">
            <h3>Personal Qualities</h3>
            <ul>
              <li>Passionate learner</li>
              <li>Team collaboration</li>
              <li>Problem solving</li>
              <li>Technology enthusiast</li>
              <li>Adaptability & growth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-title">
          <h2>Skills Powering My Work</h2>
          <p>A blend of network fundamentals and front-end craft — with room for growth.</p>
        </div>
        <div className="skills-container">
          <div className="skill-card fade-in">
            <div className="skill-info"><span>Networking</span><span>70%</span></div>
            <div className="progress-bar"><div className="progress networking"></div></div>
          </div>
          {/* Repeat for other skills */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-title">
          <h2>Projects That Shaped Me</h2>
        </div>
        <div className="project-grid">
          <div className="project-card fade-in">
            <h3>Loadlink — Distributed AI Traffic Processor</h3>
            <p>Python worker consuming Kafka traffic, forecasting with Prophet, caching in Redis.</p>
            <div className="tech-stack">
              <span>Python</span><span>Kafka</span><span>Redis</span><span>Prophet</span>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-title">
          <h2>Let&apos;s Build Something👷</h2>
          <p>Open to internships, collaboration and freelance front-end work.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <h3>Email Address📧</h3>
            <p>miguelkeitseng5@gmail.com</p>
            <h3>Phone Number📞</h3>
            <p>+267 71 869 211</p>
            <h3>Alt. Phone Number📞</h3>
            <p>+267 78 756 469</p>
          </div>
          <form id="contactForm" className="contact-form fade-in">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Miguel Kesego Keitseng. <br />All rights reserved.</p>
      </footer>
    </>
  );
}
