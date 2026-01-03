import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
// import logoImage from '../src/images/logo-2.png'; // Image replaced with text

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); // Starts animation after clicking
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <svg
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
        viewBox="0 0 1000 300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', maxWidth: '800px', width: '80%' }}
      >
        <defs>
          <path id="curve" d="M 50,220 Q 500,120 950,220" />
          <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>
        <text width="1000" textAnchor="middle" style={{ filter: 'url(#shadow)' }}>
          <textPath href="#curve" startOffset="50%" fill="#E50914" style={{
            fontFamily: "'Arial Black', 'Arial Narrow', sans-serif",
            fontWeight: 'bold',
            fontSize: '85px',
            letterSpacing: '5px',
            textTransform: 'uppercase'
          }}>
            GHOWARTHAN K
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default NetflixTitle;
