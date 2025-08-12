import { useEffect, useState } from 'react';


const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Social media icons with hover effects
  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourhandle' },
    { name: 'Dribbble', icon: 'dribbble', url: 'https://dribbble.com/yourprofile' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand/Info Column */}
          <div className="footer-brand">
            <h3 className="footer-logo">Patrick Gowon</h3>
            <p className="footer-tagline">Creating digital experiences that matter</p>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="social-icon"
                >
                  <i className={`fab fa-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:patrickgowong18mail.com">patrickgowong18mail.com</a>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+1234567890">08061533994</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Plateau State, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p>Subscribe to get updates on my latest work</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} Patrick Gowon. All rights reserved.
          </div>
          <div className="footer-credits">
            Made with <i className="fas fa-heart"></i> and React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;