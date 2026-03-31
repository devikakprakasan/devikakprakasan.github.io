import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(message);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=devikaprakasan123@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container pb-5">
        <h2 className="section-title hide-on-scroll">Get In Touch</h2>
        <p className="section-subtitle hide-on-scroll">Let's work together to build something great.</p>
        
        <div className="contact-container">
          <div className="contact-info hide-on-scroll delay-1">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-desc">
              Currently open to new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="info-items">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devikaprakasan123@gmail.com" target="_blank" rel="noreferrer" className="info-item glass hover-lift">
                <div className="info-icon"><FiMail size={24} /></div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <span className="info-value">devikaprakasan123@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:9895993209" className="info-item glass hover-lift delay-1">
                <div className="info-icon"><FiPhone size={24} /></div>
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 9895993209</span>
                </div>
              </a>
              
              <div className="info-item glass hover-lift delay-2">
                <div className="info-icon"><FiMapPin size={24} /></div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Thrissur, Kerala</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form glass hide-on-scroll delay-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" className="form-input" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-textarea" rows="5" placeholder="Let's build something..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary form-submit">
              Send Message <FiSend className="btn-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
