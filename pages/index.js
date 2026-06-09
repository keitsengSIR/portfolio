import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      fadeElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
          element.classList.add('show');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setFormStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/assets/style.css" />
      </Head>
      
      <nav className="navbar">
        <div className="nav-brand">Portfolio</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero fade-in">
        <div className="hero-content">
          <h1>Hi, I&apos;m a Developer</h1>
          <p>I build modern web experiences.</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </section>

      <section id="about" className="about fade-in">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I&apos;m a passionate developer focused on building clean, performant, and accessible web applications.
          </p>
        </div>
      </section>

      <section id="skills" className="skills fade-in">
        <div className="container">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>CSS / Tailwind</li>
            <li>Git &amp; GitHub</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="projects fade-in">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project One</h3>
              <p>A brief description of this project and what technologies were used.</p>
              <a href="#" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>A brief description of this project and what technologies were used.</p>
              <a href="#" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <h3>Project Three</h3>
              <p>A brief description of this project and what technologies were used.</p>
              <a href="#" className="btn">View Project</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact fade-in">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact-form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button onClick={handleSubmit} className="btn">Send Message</button>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}