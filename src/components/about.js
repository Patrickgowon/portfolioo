import '../styles/animations.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title slide-in">About Me</h2>
          <p className="section-subtitle fade-in">Get to know me</p>
        </div>
        
        <div className="about-content">
          <div className="about-image fade-in">
            <div className="image-wrapper">
              {/* Replace with your image */}
              <div className="placeholder-image">
              <img src="/patrick2.jpg" alt="Money Saver" />
              </div>
              
            </div>
          </div>
          
          <div className="about-text fade-in delay-1">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate web developer with a focus on creating exceptional digital experiences. 
              With a background in design and development, I bring a unique perspective to every project.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>Name:</h4>
                <p>Patrick Gowon</p>
              </div>
              <div className="detail-item">
                <h4>Email:</h4>
                <p>Patrickgowon18@gmail.com</p>
              </div>
              <div className="detail-item">
                <h4>Experience:</h4>
                <p>3+ Years</p>
              </div>
              <div className="detail-item">
                <h4>Location:</h4>
                <p>Plateau State, Nigeria</p>
              </div>
            </div>
            
            <div className="about-actions">
              <a href="#" className="btn">Download CV</a>
              <a href="#" className="btn btn-outline">View Certifications</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;