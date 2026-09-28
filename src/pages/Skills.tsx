import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import {
  FaPython,
  FaPrint,
  FaRobot,
  FaCogs,
  FaCalculator,
  FaCube,
  FaMap,
  FaBrain,
  FaLinux,
  FaTools,
  FaGitAlt,
  FaFileAlt,
  FaClipboardCheck,
  FaCheckCircle,
  FaChartLine,
  FaTasks,
  FaIndustry,
  FaComments,
  FaUsers
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiAnsys,
  SiAutodesk,
  SiNvidia
} from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  FaPython: <FaPython />,
  SiCplusplus: <SiCplusplus />,
  SiMathworks: <FaCalculator />,
  FaLinux: <FaLinux />,
  FaTools: <FaTools />,
  FaGitAlt: <FaGitAlt />,
  SiRos: <FaRobot />,
  SiNvidia: <SiNvidia />,
  SiRviz: <FaCube />,
  SiGazebo: <FaCube />,
  FaRobot: <FaRobot />,
  FaBrain: <FaBrain />,
  SiSolidworks: <FaCogs />,
  SiAnsys: <SiAnsys />,
  SiAutodesk: <SiAutodesk />,
  FaCogs: <FaCogs />,
  FaMap: <FaMap />,
  FaFileAlt: <FaFileAlt />,
  FaClipboardCheck: <FaClipboardCheck />,
  FaCheckCircle: <FaCheckCircle />,
  FaChartLine: <FaChartLine />,
  FaPrint: <FaPrint />,
  FaTasks: <FaTasks />,
  FaIndustry: <FaIndustry />,
  FaComments: <FaComments />,
  FaUsers: <FaUsers />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }
    fetchSkills();
  }, []);

  if (skillsData.length === 0) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: '100px' }}>Loading...</div>;
  }

  const skillsByCategory = skillsData.reduce((acc: Record<string, Skill[]>, skill: Skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="skills-main-title">🛠️ Technical Skills & Tools</h2>
        <p className="skills-subtitle">
          Core competencies spanning robotics autonomy, CAD/FEA simulation, programming, and industrial manufacturing.
        </p>
      </div>

      {Object.keys(skillsByCategory).map((category, index) => (
        <section key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="skill-icon-wrapper">
                  {iconMap[skill.icon] || <FaCogs />}
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
