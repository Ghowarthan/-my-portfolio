import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { SiUdemy, SiCoursera, SiIeee, SiGoogle } from 'react-icons/si';
import { FaExternalLinkAlt, FaUniversity, FaTools, FaHelicopter, FaCalculator } from 'react-icons/fa'; // Added FaTools for workshop and FaHelicopter for drone
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  'google': <SiGoogle />,
  'workshop': <FaTools />,
  'drone': <FaHelicopter />,
  'matlab': <FaCalculator />
}

const Certifications: React.FC = () => {

  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
