import { Link } from 'react-scroll';
import '../styles/animations.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h4 className="hero-subtitle fade-in">i am Patrick Gowon</h4>
            <h1 className="hero-title slide-in">Patrick Gowon</h1>
            <h2 className="hero-headline slide-in delay-1">I build things for the web.</h2>
            <p className="hero-description fade-in delay-2">
              I'm a passionate web developer specializing in modern JavaScript frameworks. 
              I create exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
            <div className="hero-actions fade-in delay-3">
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                className="btn"
              >
                View My Work
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="btn btn-outline"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-image scale-in">
            
            <div className="image-wrapper">
              {/* Replace with your image or illustration */}
              <div className="placeholder-image">
              <img src="/patrick2.jpg" alt="Money Saver" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;