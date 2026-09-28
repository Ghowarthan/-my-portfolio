import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';

const NetflixTitle: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    if (isClicked) return;
    try {
      const audio = new Audio(netflixSound);
      audio.play().catch(error => {
        console.warn("Audio autoplay prevented or failed:", error);
      });
    } catch (e) {
      console.warn("Audio init error:", e);
    }
    setIsClicked(true);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/browse');
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound} role="button" tabIndex={0}>
      <svg
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
        viewBox="0 0 1000 300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', maxWidth: '850px', width: '85%' }}
      >
        <defs>
          <path id="curve" d="M 50,220 Q 500,120 950,220" />
          <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.7" />
          </filter>
        </defs>
        <text width="1000" textAnchor="middle" style={{ filter: 'url(#shadow)' }}>
          <textPath
            href="#curve"
            startOffset="50%"
            fill="#E50914"
            style={{
              fontFamily: "'Arial Black', 'Arial Narrow', sans-serif",
              fontWeight: '900',
              fontSize: '85px',
              letterSpacing: '6px',
              textTransform: 'uppercase'
            }}
          >
            GHOWARTHAN K
          </textPath>
        </text>
      </svg>

      {!isClicked && (
        <div className="netflix-cta">
          <p className="netflix-cta-hint">Click anywhere to start</p>
          <button className="netflix-skip-btn" onClick={handleSkip}>
            Skip Intro &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default NetflixTitle;
