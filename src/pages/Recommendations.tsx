import React from 'react';
import './Recommendations.css';


const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card" style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#e50914', marginBottom: '20px', textTransform: 'uppercase' }}>Letter of Recommendation</h2>
        <img
          src={process.env.PUBLIC_URL + "/recommendation-letter.png"}
          alt="Letter of Recommendation"
          style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
        />
      </div>
    </div>
  );
};

export default Recommendations;
