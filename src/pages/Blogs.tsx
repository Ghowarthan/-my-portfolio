import React from 'react';
import './Blogs.css';
import { FaFileAlt, FaMicrophone, FaIndustry, FaRocket } from 'react-icons/fa';

const technicalArticles = [
  {
    title: "Structural Analysis & Experimental Validation of Hybrid Composite Vehicle Bodies",
    platform: "PECMACT Conference Presentation & Research",
    icon: <FaMicrophone />,
    link: "https://www.linkedin.com/in/ghowarthan-k-5902a4284",
    description: "Presented experimental validation correlating FEA predictions in ANSYS with destructive physical testing, achieving 75% weight reduction.",
  },
  {
    title: "Technology Transfer & Assembly Line Balancing for Portable Air Compressors",
    platform: "Manufacturing Case Study (Doosan Bobcat)",
    icon: <FaIndustry />,
    link: "https://www.linkedin.com/in/ghowarthan-k-5902a4284",
    description: "Insights on establishing greenfield assembly lines from scratch, cycle-time balancing, PFMEA, and ergonomic crane-assisted robotic assembly.",
  },
  {
    title: "Project BRIMSTONE: Liquid-Propellant VTVL Rocket Lander Propulsion Design",
    platform: "ASU Collegiate Propulsive Landing Challenge",
    icon: <FaRocket />,
    link: "https://www.linkedin.com/in/ghowarthan-k-5902a4284",
    description: "Deep dive into sizing propellant feed systems and analyzing pressure and fluid flow for autonomous propulsive rocket landings.",
  },
  {
    title: "RFID-Based Intelligent Car Ignition System with Driver License Integration",
    platform: "Embedded Systems & IoT Architecture",
    icon: <FaFileAlt />,
    link: "https://www.linkedin.com/in/ghowarthan-k-5902a4284",
    description: "Design of a tamper-resistant RFID vehicle ignition architecture ensuring vehicle activation solely with an authorized driver license tag.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">📝 Technical Articles & Research</h2>
      <p className="blogs-intro">Presentations, case studies, and research publications in robotics, manufacturing, and aerospace systems.</p>
      <div className="blogs-grid">
        {technicalArticles.map((blog, index) => (
          <a
            href={blog.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
          >
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
