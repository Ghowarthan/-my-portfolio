import React, { useEffect, useState } from 'react';
import './Projects.css';
import {
  FaRocket,
  FaCogs,
  FaRobot,
  FaMicrochip,
  FaVial,
  FaBroadcastTower,
  FaBrain,
  FaCar,
  FaLeaf,
  FaPython,
  FaReact
} from 'react-icons/fa';
import { SiAnsys, SiAutodesk, SiCplusplus } from 'react-icons/si';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';

const techIcons: { [key: string]: JSX.Element } = {
  "Propulsion": <FaRocket />,
  "Fluid Dynamics": <FaRocket />,
  "GNC": <FaRobot />,
  "Autonomous Systems": <FaBrain />,
  "SolidWorks": <FaCogs />,
  "CATIA": <SiAutodesk />,
  "ANSYS": <SiAnsys />,
  "FEA Simulation": <SiAnsys />,
  "Composite Materials": <FaCar />,
  "Mechanical Testing": <FaVial />,
  "Embedded C": <SiCplusplus />,
  "RFID": <FaBroadcastTower />,
  "IoT": <FaMicrochip />,
  "Automotive Electronics": <FaCar />,
  "Circuit Design": <FaMicrochip />,
  "Materials Science": <FaVial />,
  "Biocomposites": <FaLeaf />,
  "Sustainable Engineering": <FaLeaf />,
  "Python": <FaPython />,
  "React": <FaReact />
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  if (projects.length === 0) return <div style={{ color: '#fff', textAlign: 'center', marginTop: '100px' }}>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
