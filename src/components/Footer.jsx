import { FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="gradient-text">&lt;Devika /&gt;</span>
        </div>
        
        <p className="footer-text">
          Designed & Built with <FiHeart className="heart-icon" size={16} /> by Devika K P
        </p>
        
        <div className="footer-copyright">
          &copy; {currentYear} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
