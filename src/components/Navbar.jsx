import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Achievements', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled glass' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <a href="#">Devika<span>.</span></a>
        </div>
        
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="desktop-menu">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume-btn btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.9rem', marginLeft: '1rem' }}>
              Resume
            </a>
          </div>

          <button 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
            style={{ 
              background: 'rgba(128, 128, 128, 0.1)', 
              border: '1px solid var(--card-border)', 
              color: 'var(--text-main)', 
              cursor: 'pointer', 
              display: 'flex', 
              padding: '0.5rem',
              borderRadius: '50%'
            }}
            className="hover-lift"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open glass' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-link resume-mobile"
          style={{ color: 'var(--accent-color)', fontWeight: '600' }}
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
