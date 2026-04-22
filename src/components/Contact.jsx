import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiX } from 'react-icons/fi';
import FadeIn from './FadeIn';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
      const response = await fetch('https://formsubmit.co/ajax/devikaprakasan123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Message from ${name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container pb-5">
        <FadeIn direction="up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together to build something great.</p>
        </FadeIn>

        <div className="contact-container">
          <FadeIn direction="left" delay={0.2} className="contact-info">
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

              <a href="tel:9895993209" className="info-item glass hover-lift">
                <div className="info-icon"><FiPhone size={24} /></div>
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 9895993209</span>
                </div>
              </a>

              <div className="info-item glass hover-lift">
                <div className="info-icon"><FiMapPin size={24} /></div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Thrissur, Kerala</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.4} className="contact-form-wrapper">
            <form className="contact-form glass" onSubmit={handleSubmit}>
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

              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={status === 'loading' || status === 'success'}
                style={{
                  backgroundColor: status === 'success' ? '#22c55e' : status === 'error' ? '#ef4444' : '',
                  borderColor: status === 'success' ? '#22c55e' : status === 'error' ? '#ef4444' : '',
                  opacity: status === 'loading' ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {status === 'loading' ? 'Sending...' : 
                 status === 'success' ? <><FiCheck /> Sent Successfully</> : 
                 status === 'error' ? <><FiX /> Failed, try again</> : 
                 <>Send Message <FiSend /></>}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
