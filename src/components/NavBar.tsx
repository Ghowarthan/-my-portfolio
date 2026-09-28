import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaCertificate,
  FaPassport,
  FaFileAlt
} from 'react-icons/fa';
import './Navbar.css';
import blueImage from '../images/blue.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', marginRight: '24px', marginLeft: '10px' }}>
            <span style={{
              color: '#E50914',
              fontSize: '1.15rem',
              fontWeight: '900',
              fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              letterSpacing: '0.8px'
            }}>
              GHOWARTHAN
            </span>
          </Link>
          <ul className="navbar-links">
            <li><Link to="/browse">Home</Link></li>
            <li><Link to="/work-experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/work-permit">Visa Status</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img
            src={profileImage}
            alt="Profile"
            className="profile-icon"
            onClick={() => { navigate('/browse'); }}
            title="Switch Profile"
          />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (Mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <span style={{
            color: '#E50914',
            fontSize: '1.1rem',
            fontWeight: '900',
            fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            letterSpacing: '0.5px'
          }}>
            GHOWARTHAN
          </span>
        </div>
        <ul>
          <li><Link to="/browse" onClick={closeSidebar}><FaHome /> Home</Link></li>
          <li><Link to="/work-experience" onClick={closeSidebar}><FaBriefcase /> Experience & Education</Link></li>
          <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
          <li><Link to="/certifications" onClick={closeSidebar}><FaCertificate /> Certifications</Link></li>
          <li><Link to="/work-permit" onClick={closeSidebar}><FaPassport /> Visa Status</Link></li>
          <li><Link to="/blogs" onClick={closeSidebar}><FaFileAlt /> Research & Articles</Link></li>
          <li><Link to="/contact-me" onClick={closeSidebar}><FaEnvelope /> Hire Me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
