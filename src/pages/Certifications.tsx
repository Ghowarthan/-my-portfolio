import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { SiCoursera, SiGoogle } from 'react-icons/si';
import { FaExternalLinkAlt, FaUniversity, FaTools, FaHelicopter, FaRobot, FaCalculator } from 'react-icons/fa';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';

const iconData: { [key: string]: JSX.Element } = {
  'coursera': <SiCoursera />,
  'google': <SiGoogle />,
  'workshop': <FaTools />,
  'drone': <FaHelicopter />,
  'matlab': <FaCalculator />,
  'robot': <FaRobot />
};

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }
    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div style={{ color: '#fff', textAlign: 'center', marginTop: '100px' }}>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => {
          const isClickable = cert.link && cert.link !== "#";
          const CardTag = isClickable ? 'a' : 'div';
          const linkProps = isClickable
            ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <CardTag
              key={index}
              {...linkProps}
              className="certification-card"
              style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
            >
              <div className="certification-content">
                <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
              </div>
              {isClickable && (
                <div className="certification-link animated-icon">
                  <FaExternalLinkAlt />
                </div>
              )}
            </CardTag>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
