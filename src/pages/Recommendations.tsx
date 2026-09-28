import React from 'react';
import './Recommendations.css';
import { FaDownload } from 'react-icons/fa';

const Recommendations: React.FC = () => {
  const letterUrl = process.env.PUBLIC_URL + "/recommendation-letter.png";

  return (
    <div className='timeline-container'>
      <div className="recommendation-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#e50914', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Letter of Recommendation
        </h2>
        <a
          href={letterUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            padding: '10px 20px',
            backgroundColor: '#E50914',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem'
          }}
        >
          <FaDownload /> View Full Resolution
        </a>
        <img
          src={letterUrl}
          alt="Letter of Recommendation"
          style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}
        />
      </div>
    </div>
  );
};

export default Recommendations;
