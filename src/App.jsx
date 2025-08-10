import React, { useState } from 'react';
import './App.css';

function App() {
   const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Newsletter', href: '#newsletter' }
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">

      
      {/* Overlay */}
      {/* {isOpen && (
        <div 
          className="nav-overlay"
          onClick={closeNav}
        />
      )} */}

      {/* Mobile Navigation */}
      {
        isOpen ? 
      (<nav className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
        <div className="mobile-nav__header">
          <h2 className="mobile-nav__title">Handshake</h2>
          <button 
            className="mobile-nav__close"
            onClick={toggleNav}
            aria-label="Close navigation"
          >
           <span>x</span>
          </button>
        </div>

        <ul className="mobile-nav__list">
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav__item">
              <a 
                href={item.href}
                className="mobile-nav__link"
                onClick={toggleNav}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

      </nav> ): ''
      }

      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              Handshake
            </div>

           <ul className='nav-center'>
              <li>about</li>
               <li>portfolio</li>
                <li>services</li>
                 <li>team</li>
                  <li>contact</li>
           </ul>

            <button className="menu-button" onClick={toggleNav}>
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Residential<br />
              Architects
            </h1>
            <div className="hero-image">
              <img
                src="https://ext.same-assets.com/3751657217/3554718712.webp"
                alt="Modern kitchen interior"
              />
            </div>
          </div>
          <div className="hero-bottom">
            <div className="scroll-indicator">
              <span>Scroll</span>
              <span>Down</span>
            </div>
            <div className="location">
              <span>Based in</span>
              <span>Seattle</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-content">
            <div className="section-label">[01] About</div>
            <h2 className="about-title">
              Hey, we're Handshake: Architects based in Seattle, USA. Our projects range from small side projects, to major industrial buildouts, & everything in-between.
            </h2>
            <div className="about-text">
              <p>
                We believe that the spaces humans inhabit provide much deeper value than simply shelter — they're
                where we learn, explore, and become. Artistry is often forgotten about in the field of architecture,
                commonly replaced by domineering function, or cliche stylings. It's our mission to create places that
                spark presence: Allowing oneself to simply be, and start to appreciate the moment.
              </p>
            </div>
            <button className="work-with-us-btn">
              Work with us
            </button>
          </div>
          <div className="about-image">
            <img
              src="https://ext.same-assets.com/3751657217/2798503887.webp"
              alt="Modern living space"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        <div className="container">
          <div className="section-label">[02] Portfolio</div>
          <h2 className="portfolio-title">
            With a decade of work, we're devoted to helping clients build a more beautiful world.
          </h2>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://ext.same-assets.com/3751657217/3941365997.webp" alt="Zellar Residence" />
              <div className="portfolio-info">
                <h3>Zellar Residence</h3>
                <span>2018</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://ext.same-assets.com/3751657217/3829110505.webp" alt="Open Coworking" />
              <div className="portfolio-info">
                <h3>Open Coworking</h3>
                <span>2020</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://ext.same-assets.com/3751657217/4202403637.webp" alt="The Meridien" />
              <div className="portfolio-info">
                <h3>The Meridien</h3>
                <span>2017</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://ext.same-assets.com/3751657217/2821674533.webp" alt="Du Ponte Residence" />
              <div className="portfolio-info">
                <h3>Du Ponte Residence</h3>
                <span>2014</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://ext.same-assets.com/3751657217/3385985752.webp" alt="Mercury Interiors" />
              <div className="portfolio-info">
                <h3>Mercury Interiors</h3>
                <span>2022</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://ext.same-assets.com/3751657217/3381803832.webp" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3>Brady Residence</h3>
                <span>2018</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-label">[03] Services</div>
          <h2 className="services-title">How we can help</h2>
          <p className="services-subtitle">
            Think we might be a good fit for your upcoming project? Reach out — we'd love to
            talk details and see how we can help.
          </p>

          <div className="services-navigation">
            <button className="nav-arrow nav-left">←</button>
            <button className="nav-arrow nav-right">→</button>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="https://ext.same-assets.com/3751657217/514205935.svg" alt="Design Development" />
              </div>
              <h3>Design Development</h3>
              <span className="service-number">[03]</span>
              <p>
                Once the concept is clear, we move into precise floor plans, elevations, and early materials.
                Every detail is refined with buildability and clarity in mind — this is where the design truly takes form.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://ext.same-assets.com/3751657217/4126901694.svg" alt="Permitting & Documentation" />
              </div>
              <h3>Permitting & Documentation</h3>
              <span className="service-number">[04]</span>
              <p>
                We prepare the technical drawings and documents needed for permitting and construction.
                We also coordinate with consultants to ensure all plans are aligned and ready for review.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://ext.same-assets.com/3751657217/1809807493.svg" alt="Construction Oversight" />
              </div>
              <h3>Construction Oversight</h3>
              <span className="service-number">[05]</span>
              <p>
                During the build, we stay closely involved. From reviewing shop drawings to site visits and
                clarifying design intent, we make sure the finished product aligns with the original vision.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://ext.same-assets.com/3751657217/2891193801.svg" alt="Interior Detailing" />
              </div>
              <h3>Interior Detailing</h3>
              <span className="service-number">[06]</span>
              <p>
                We offer full interior design services — including built-ins, lighting layouts, and finishes —
                that carry the architectural ideas through to every surface and touchpoint inside the home.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://ext.same-assets.com/3751657217/3522464745.svg" alt="Post-Occupancy Support" />
              </div>
              <h3>Post-Occupancy Support</h3>
              <span className="service-number">[07]</span>
              <p>
                Once you've moved in, we remain available for small updates, clarifications, or seasonal adjustments.
                Good design continues to evolve with how you live.
              </p>
            </div>
          </div>

          <div className="faq-section">
            <h3>Common Questions</h3>
            <p>Everything we do follows strict process, eliminating the guesswork, and allowing our teams to most effectively craft the designs we're known for. Projects vary by scope, but we handle things every step of the way.</p>

            <div className="faq-list">
              <div className={`faq-item ${activeFAQ === 0 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(0)}>
                  <span>What's your typical project timeline?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Every project is different, but most residential designs take 2-4 months to finalize, followed by permitting and construction. We'll give you a detailed timeline after the initial consultation.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFAQ === 1 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(1)}>
                  <span>Do you handle permits and zoning approvals?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Yes — we're familiar with local zoning codes and building regulations, and we guide the permitting process from start to finish to avoid delays.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFAQ === 2 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(2)}>
                  <span>Can you work with my existing contractor?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Absolutely. We're happy to collaborate with your chosen contractor and can also recommend builders we trust if you're still making that decision.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFAQ === 3 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(3)}>
                  <span>What's included in your architectural services?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>We provide concept design, floor plans, elevations, & full construction drawings. We also offer 3D renderings and site visits as requested.</p>
                </div>
              </div>

              <div className={`faq-item ${activeFAQ === 4 ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(4)}>
                  <span>Do you take on renovations too?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>We do both. Whether you're remodeling a kitchen or starting from the ground up, we can help shape your space with thoughtful, functional design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team section">
        <div className="container">
          <div className="section-label">[04] Team</div>
          <h2 className="team-title">Who we are</h2>
          <p className="team-subtitle">
            Life-long friends turned business partners. We strive to build lasting monuments, objects,
            and structures that reflect our clients' unique perspectives of the world.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <img src="https://ext.same-assets.com/3751657217/2774554438.webp" alt="Nathan Romero" />
              <h3>Nathan Romero</h3>
              <span>Head of Operations</span>
            </div>
            <div className="team-member">
              <img src="https://ext.same-assets.com/3751657217/3048592380.webp" alt="Alexis Osbourne" />
              <h3>Alexis Osbourne</h3>
              <span>Architect</span>
            </div>
            <div className="team-member">
              <img src="https://ext.same-assets.com/3751657217/3183488024.webp" alt="Natalie Kensington" />
              <h3>Natalie Kensington</h3>
              <span>3D Rendering</span>
            </div>
            <div className="team-member">
              <img src="https://ext.same-assets.com/3751657217/4173354391.webp" alt="Gerard Stone" />
              <h3>Gerard Stone</h3>
              <span>Lead Designer</span>
            </div>
            <div className="team-member">
              <img src="https://ext.same-assets.com/3751657217/3954407761.webp" alt="Caitlyn Zeiss" />
              <h3>Caitlyn Zeiss</h3>
              <span>Founder & CEO</span>
            </div>
            <div className="team-member">
              <img src="https://ext.same-assets.com/3751657217/1738922182.webp" alt="Clark Rosenbeg" />
              <h3>Clark Rosenbeg</h3>
              <span>Account Manager</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="section-label">[05] Contact</div>
          <h2 className="contact-title">Start a project</h2>

          <div className="contact-content">
            <div className="contact-text">
              <p>
                Think we might be a good fit for your upcoming project? Reach out — we'd love to
                talk details and see how we can help.
              </p>
              <p>
                We have multiple models of engagement: We can work directly with individuals for private residences,
                partner with builders and contractors on corporate projects, or simply be involved in the planning process.
                No project is too small, but we generally prefer to work in sprints with a 3-6 month minimum duration.
                If you have any questions or ideas, we'd be happy to schedule a consultation.
              </p>

              <button className="cta-button">
                Let's create something amazing
              </button>
            </div>

            <div className="contact-image">
              <img src="https://ext.same-assets.com/3751657217/391775414.webp" alt="Modern interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="newsletter">
              <h3>Newsletter</h3>
              <p>Enter your email for biweekly project highlights, design notes, and studio news. No spam, promise.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Email Address" />
                <button type="submit">→</button>
              </form>
            </div>

            <div className="footer-nav">
              <div className="footer-col">
                <h4>Navigate</h4>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#services">Services</a>
                <a href="#team">Team</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="footer-col">
                <h4>Phone</h4>
                <a href="tel:1234567890">(123) 456-7890</a>

                <h4>Email</h4>
                <a href="mailto:hello@aaronrolston.com">hello@aaronrolston.com</a>
              </div>

              <div className="footer-col">
                <h4>Address</h4>
                <p>123 Fake Address Rd.<br />Seattle, WA 54321 USA</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo">Handshake</div>
            <div className="footer-credits">
              <span>Handshake © 2099</span>
              <span>Built by <a href='https://fikayobytes.netlify.app/'>Fikayo the badass</a> in Framer</span>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

