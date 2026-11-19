import React from "react";
import "./index.css";
import "./web-development.css";

const AIPage = () => {
  return (
    <>
      <header id="navbar" className="navbar">
        <nav>
          <div className="logo-container">
            <a href="/">
              <img src="image/Gen data tech-03.png" alt="Logo" className="logo" />
            </a>
          </div>

          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>

          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </label>
            <a href="/">Home</a>
            <a href="/Services">Services</a>
            <a href="/IT-Training">IT Training</a>

            <div className="menu-buttons">
              <a href="#contact" className="btn secondary">Contact Us</a>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <video autoPlay loop muted playsInline className="back-video">
          <source src="image/AIvideo.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <h1>Empower Your Business with<br /><span className="highlight">AI</span></h1>
          <p>
            Unlock the potential of your data with our custom AI models and machine learning solutions.
            Enhance decision-making and drive innovation with insights tailored to your business needs.
          </p>
        </div>
      </section>

      <section id="solution" className="intro-section">
        <div className="intro-content">
          <h2>Unlock the <span className="highlight">Power of AI</span></h2>
          <p>
            Our AI and Machine Learning Solutions are tailored to enhance your business operations.
            With our expertise, we create custom models that drive innovation and efficiency.
          </p>
        </div>
        <div className="services-container">
          <div className="service-card">
            <div className="icon">⚙️</div>
            <h3>Custom Models</h3>
            <p>
              We design models specifically for your business needs, ensuring that the solutions
              we provide are perfectly aligned with your operational goals.
              This customization leads to better outcomes and satisfaction.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">🎨</div>
            <h3>Data-Driven Insights</h3>
            <p>
              Our solutions empower you to make informed decisions based on comprehensive data analysis.
              By leveraging insights, you can enhance your strategic planning and operational effectiveness.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">📱</div>
            <h3>Increased Efficiency</h3>
            <p>
              Automating routine tasks through our AI solutions allows your team to focus on more strategic initiatives.
              This not only boosts productivity but also fosters innovation within your organization.
            </p>
          </div>
        </div>
      </section>

      <section id="get-in-touch">
        <h2>Get in <span className="half-green">Touch</span></h2>
        <div className="content-wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className="whatsapp-logo"
          />
          <a href="https://wa.me/8428683895?text=Welcome%20to%20GDTech" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            Chat with Us
          </a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <h3>GenData Tech</h3>
            <p>gendatatechies@gmail.com</p>
            <p>8428683895 <br />9566463895</p>
            <p>Annai abirami Nagar, subha nagar area,<br />kovilpatti -628502</p>
          </div>

          <div className="services">
            <h3>Our Services</h3>
            <ul>
              <li>Web Development</li>
              <li>Data Analysis</li>
              <li>AI/ML Development</li>
              <li>Internships</li>
            </ul>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/gendata_tech/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@GenDataTech" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/company/105936374" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 GenData Tech. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AIPage;
