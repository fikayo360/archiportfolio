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
              Carter.
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
              Architect
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
            <div className="section-label">[01] About me</div>
            <h2 className="about-title">
              I am a residential architect with a deep commitment to transforming spaces into homes
               that are both beautiful and functional. My philosophy centers on the belief that great design begins with understanding 
               the human element—how we live, interact, and find comfort in our surroundings. By blending innovative design with meticulous attention to detail,
                I create living environments that are not just aesthetically pleasing but also perfectly tailored to the unique lifestyles of my clients.


            </h2>
            <div className="about-text">
              <p>
                My approach to architecture is a collaborative journey. From the initial sketch to the final construction phase, I work closely with you to ensure your vision 
                is at the core of every decision. 
                I specialize in crafting bespoke solutions, whether it's optimizing a challenging layout, integrating sustainable features, or simply elevating the design
                of a single room. My portfolio showcases a range of projects, each a testament to a unique story and a shared creative process.

               Ultimately, my goal is to build spaces that stand the test of time, both in design and durability.
               I believe that thoughtful architecture has the power to enhance daily life and leave a lasting legacy. I am passionate about creating homes that inspire,
               and I am excited to help you bring your residential vision to life.
              </p>
            </div>
           
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
          <div className="section-label">[02] My Portfolio</div>
          <h2 className="portfolio-title">
            With over 3 years experience as an architect, i am devoted to helping clients build more aesthetically pleasing spaces.
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
          <h2 className="services-title">How i can help</h2>
          <p className="services-subtitle">
            Think we might be a good fit for your upcoming project? Reach out — we'd love to
            talk details and see how we can help.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAbFBMVEX///8AAAD7+/vx8fH19fXt7e1NTU34+Pjh4eGmpqaGhoZhYWHp6ena2trd3d1bW1u+vr5ra2tmZmY+Pj58fHxDQ0N0dHTQ0NATExM5OTkKCgrKyspWVlYsLCySkpJISEibm5sjIyOysrIbGxtzlbzQAAAHxUlEQVR4nO1c2cKyOgyURVkERcWFT3B9/3c8KEi3tE1L+fXizKUKjJk2TZOU2ex/9MiK/NsUOMS3ZXWqjt+mMSBYFYc/743021w6BMVle/c+KL5Np0WWrKuTR5B8m5B/TCqPwenrnIry5HH4Nqd88cdT+janVSow+rp2RSVy+rKdQsBMBpzOxdw9p/kSoPSH5lScvDrxHXPKtpCdHujrH+/xl2YueWWLUdrNZtG+uyQ9O+MUrkdp98LlM1u3rpakcWP8DZ++MnPAKRltpxn7x5rL6AgsFxYWYzu1ODJ3aTYjQ7DaBaeZX3K32BUjVATEM9buhUJYNhdJbMkJ8gZ2awuwSjWlnbUerjhBd2qxPAbGd4qE/2cdF4RPkJW3vZn6+aNocuvpfINJeWvTG22cqdf6lgbkdAgN7xMC97lHtqx4r/DGxnhMifPYM9hQFSnrIs/AzZbmgcMFuI23QF7ceriKHYCiezHWrp17B4jUCRd/vLzuibVqIdhp4BSmWJcFx1G4XXryWuwq9knhnr3RZtBuvvGuKxyp/A6SwniFbnVacp+yDvQwjPHoFW0jWYleqoPeK/Qr5o37OKd98Zpo183LK2pzAU2XF+5aTn2gIqy4VFhFaffZAewxjllGSucVPpHFU/gmBrQLya7kiogbhNnyQY3i5B3E7z5Tpx5ccET71IVeQSmppypwTAaPCxi0H6YHoh27o9xpFZTKp/IKJCq8A9Op2xlR2vGr616noJxUI72UilS30LL28gr1YKdQdM8LjReVuQRP7hUSarW8QD/Irt5hGE8BlA3QzEGJ8+xYgbaiI/oTPEfTjVy7npXSVvEevKhDA+zBaTt5FRyUBIPPDMCltcVCNa4k/+SDZ83Zgt356CJKULveVioFwdCFxj2hLud2Y5rFCBjjBDuFgvAOhAFRMeEiQrUflGrXQaFgAIfVLE6LIhLt5DVqTnLtOlzlCoLJMhGtisJO+qYkJdvaEOyklpa7Tw6NkAZRpzB8KEXBQhpf+VBKGIWNJvrWzOw3K4mCc/0fkkCbEA31t96DCobIMSVip+PUQjfWYX+V6S+TAZMUCxAKCuMqgBKwOADhHYAQ3i0xrDgF7bXDZ0H0j2CjvszeTvidPUZBitUI7UxqypFeQRKMINyIFEujBIFGwSexembtn4yTOxoFCSeEY5NiaVpE81UKEh+MGH5SbMwLe5H0cbR2I8b4zZjSjNq38yCcRsy7Cl8CZCBRkNxtxNpSWtdkocnuZN5txlQYgUgUrV19l32zPVtnjd8Qoj60dhc/egC8ntVlfHmYnfIntHbd8pE9Ltv9UNNo6vLmpn+KEQmtXTpYI4jz8/lcFOfzMXdRfO3gD4//Q/snMF/hFB8FTbWbmFXNa6ce46nrBgwQ/pKxU6wObKbXrkOrIKWdmtO/awUMiAv+Ce04/Ih2DOa/oh3N6Qe1W11/UDs1p69op1lbfnHefWeM/yCnGL0GX2w7eMw5Ye0Ult4CWXceC12sQsb4q064N2/fsQB+beliL2XFxBUnrH8KP/XU6VmZadcBV6O3B35toXc+mGq4Pcy1m15BG+16VpPNwXyH1M4X8w77ifxVrOYk1W5KBXVrC9EOrhMiuiyMgdZOmvVzr2CmLpYR7SKwr++Nq7v8wRu6NVinXQddl4UZ8Nqp687YXjUM0PNOoV3PytloX6HjTH3d2ZWCGu3o2FdbofccRX3KzhU+HkcUj11EfbnZntNX//xtq9G+Pcf6pw/+gYK6WAXYcwbmFV4zoP0TDWXNq7fVCAWNteuAUdCalYV2PSvEaLdU8Ki2kyrXM6ZPRo4omq3stOugSai9bWWiYJCU23VdLzWcNLmeUD1F3qywXjR74JqM9Hk6X18oxUV90UO9pAzA5HowCiJWZ/DoIsgJladDKFhr5+AROlgCAZtjjfS20s3BM6bl8AV8nm6uN706bo+hk4sgJ4Mcq49QUMEq0F/ec8JTahEiFJQ3TWk7a604oRSUDlH22Gmzr69iB6YNp1ZBnZcppT6U3tVuutL+Mb074KSNGUppX0JE/eox/OrIz0e7OoIyblc0m1IdvHRf3Jy1lW0NSBH1lYrusqXkwQU9sOzrCFIFiXa54EXDIShrWK9BZ7/G1IAkcTvRLm+E7mgyeDbcN6TdHdcXKgMY9RHtXsea1twsLIYWFL6XPx6+KUeRgmIGSrsGGB7kjKfQEzPYcJylWgV5f0W6FeM+hmNd+78gxUd96WCn4UhaxZIaJhnfHJfdHck34xQkx4WofRzTpksGOv9oYkMHhWoq6qO0ozw083Sid8U5M5IEc/ESjEFBol1OS1oxzooYlp1+1Kkq85O/AHoFQe1eYHoGSQbuzkwB4vNOLji1i+xLwQOonSBHSH1BJmBAebybG1KvqE+inThGqIlxv/UOv6A4nZwVMbKbTDuBFHNOsDkkxSNlXho1RVE/Fl/PwPah+uCbYQZUE1R7cpETf/AzU26wJnhPG5T7Ehy06vjUeG8uYAVsAf7Efc1DuvGzeDuBDvEdeA60aMiOCqpCVltATf7wwQtw436f6P1jKZ+5kB28yFJBwnKyd0lyb2BTjJGcLY1tRnaLKxHTbuimHiNFud5XVbWvD48JGb0RXurq+Xdqrili2AZxHk/cCvLBqiiK49R/3hX+A7zEZjD8QzxSAAAAAElFTkSuQmCC" alt="Design Development" />
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
                <img src="data:image/jpeg;base64,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" alt="Permitting & Documentation" />
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHW2ASZrdGmbEHYQQnJAGpZqXPXiZ0i6dC9h-IovDP8Q-5wZ4yKXWzOLMHHSp1" alt="Construction Oversight" />
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
                <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRgFqUP5CJWCYT5gqFy8HTOGefmzngzX4EfMWfEuDuyRawVT7wKwkt_KLTgieYh6mZUxf_LP1EvhOKFz_3nRRsMuZfyhtW_S088BK3rzyZb7-SVoCw " alt="Interior Detailing" />
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
                <img src="data:image/png;base64,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" alt="Post-Occupancy Support" />
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


      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="section-label">[05] Contact</div>
          <h2 className="contact-title">Start a project</h2>

          <div className="contact-content">
            <div className="contact-text">
              <p>
                Think i might be a good fit for your upcoming project? Reach out — i would love to
                talk details and see how i can help.
              </p>
              <p>
                i have multiple models of engagement: i can work directly with individuals for private residences,
                partner with builders and contractors on corporate projects, or simply be involved in the planning process.
                No project is too small, but i generally prefer to work in sprints with a 3-6 month minimum duration.
                If you have any questions or ideas, we'd be happy to schedule a consultation.
              </p>

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
              <h3>Reach out</h3>
              <p>Send us a message, idea quotation and lets get started </p>
              <form className="newsletter-form">
                <input type="email" placeholder="send a message" />
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
                <a href="tel:1234567890">+2234 456 789</a>

                <h4>Email</h4>
                <a href="mailto:hello@aaronrolston.com">carter@gmail.com</a>
              </div>

              <div className="footer-col">
                <h4>Address</h4>
                <p>60.<br />thompson boulevard, gerald clover rd, USA</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo">Carter.</div>
            <div className="footer-credits">
              <span>Fikayo © 2025</span>
              <span>Built by <a href='https://fikayobytes.netlify.app/' style={{color:'purple'}}>Fikayo the badass</a></span>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

