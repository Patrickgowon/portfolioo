import { useState } from 'react';
import '../styles/animations.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title slide-in">Get In Touch</h2>
          <p className="section-subtitle fade-in">Let's work together</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities.</p>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <a href="Patrickgowon18@gmail.com">Patrickgowon18@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h4>Phone</h4>
                <a href="tel:+1234567890">08061533994</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Location</h4>
                <p>Plateau State, Nigeria</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/dashboard" className="social-link">GitHub</a>
              <a href="#" className="social-link">Discord</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">facebook</a>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default Contact;