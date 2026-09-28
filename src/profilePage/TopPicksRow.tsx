import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

export type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig: Record<string, Array<{ title: string; imgSrc: string; icon: JSX.Element; route: string }>> = {
  recruiter: [
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Skills", imgSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80", icon: <FaCode />, route: "/skills" },
    { title: "Visa Status", imgSrc: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80", icon: <FaPassport />, route: "/work-permit" },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80", icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Hire Me", imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80", route: "/skills", icon: <FaCode /> },
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80", route: "/certifications", icon: <FaCertificate /> },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80", route: "/certifications", icon: <FaCertificate /> },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", route: "/contact-me", icon: <FaEnvelope /> },
  ],
  adventurer: [
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Music", imgSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80", route: "/music", icon: <FaMusic /> },
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80", route: "/reading", icon: <FaBook /> },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80", route: "/certifications", icon: <FaCertificate /> },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", route: "/contact-me", icon: <FaEnvelope /> }
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile] || topPicksConfig.recruiter;

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
