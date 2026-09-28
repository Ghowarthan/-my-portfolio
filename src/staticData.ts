import {
  ProfileBanner,
  WorkPermit,
  TimelineItem,
  Project,
  Certification,
  ContactMe,
  Skill
} from './types';

export const profileBannerData: ProfileBanner = {
  backgroundImage: {
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1950&q=80"
  },
  headline: "Robotics & Autonomous Systems Engineer | M.S. Student @ Arizona State University",
  resumeLink: {
    url: process.env.PUBLIC_URL + "/resume.pdf"
  },
  linkedinLink: "https://www.linkedin.com/in/ghowarthan-k-5902a4284",
  profileSummary: "Mechanical engineer currently pursuing M.S. in Robotics & Autonomous Systems (Systems Engineering) at Arizona State University. Propulsion Engineer for Project BRIMSTONE (ASU-ARCS) working on liquid-propellant VTVL rocket landers. Experienced in manufacturing engineering, line transfer, and industrial automation at Doosan Bobcat and SRM Industries. Passionate about robotics systems, ROS 2, industrial automation, CAD & simulation (SolidWorks, ANSYS, Creo), and next-generation autonomous technologies."
};

export const workPermitData: WorkPermit = {
  visaStatus: "F-1 Student Visa (USA)",
  expiryDate: new Date("2028-05-31"),
  summary: "Currently enrolled in M.S. Robotics and Autonomous Systems (Systems Engineering) at Arizona State University. Fully authorized to work in the United States via CPT (Curricular Practical Training) for internships and eligible for up to 3 years of STEM OPT post-graduation with no immediate employer visa sponsorship required.",
  additionalInfo: "Actively seeking Summer 2027 Engineering Internships in Robotics, Automation, Manufacturing, and Control Systems nationwide."
};

export const timelineData: TimelineItem[] = [
  {
    timelineType: 'education',
    name: "Arizona State University (ASU)",
    title: "Master of Science in Robotics and Autonomous Systems (Systems Engineering)",
    techStack: "Tempe, Arizona, USA | Aug 2026 – 2028",
    summaryPoints: [
      "Specialization in Autonomous Systems Engineering, Industrial Automation, and Intelligent Control Systems.",
      "Relevant Coursework: Robotic Systems I, Machine Learning and AI, Applied Linear Algebra for Engineers."
    ],
    dateRange: "Aug 2026 - 2028"
  },
  {
    timelineType: 'work',
    name: "Arizona State University - ARCS (Aerial, Robotics, and Control Systems)",
    title: "Propulsion Engineer – Project BRIMSTONE",
    techStack: "VTVL Lander, Propulsion Feed Systems, Fluid Dynamics, GNC, SolidWorks",
    summaryPoints: [
      "Contributing to the propulsion subsystem of a liquid-propellant VTVL lander built for the Collegiate Propulsive Landing Challenge (autonomous vertical takeoff, hover, and propulsive landing).",
      "Sizing the propellant feed system and performing pressure and flow analyses to optimize combustion performance.",
      "Collaborating across the design-build-test cycle alongside the avionics and GNC teams responsible for closed-loop vehicle control."
    ],
    dateRange: "Aug 2026 - Present"
  },
  {
    timelineType: 'work',
    name: "Doosan Bobcat India Private Ltd",
    title: "Manufacturing Engineering – Portable Air Compressor Assembly & Backhoe Loader",
    techStack: "SolidWorks, Creo, Lean / Kaizen, 5S, Line Balancing, PFMEA, MBOM, SOP, SWI",
    summaryPoints: [
      "Supported end-to-end technology transfer of portable air compressor production to a new plant: established assembly lines, workstation layouts, process definition, tooling, and manufacturing documentation.",
      "Deployed on-site to Bengaluru plant to capture baseline manufacturing data (process sequences, cycle times, tooling and fixtures).",
      "Improved assembly line processes through cycle-time studies and line balancing, reducing station cycle time by 15% and takt variance by 30 seconds across 5 stations.",
      "Designed assembly fixtures and material-handling trolleys in SolidWorks and Creo, eliminating 8 minutes of non-value-added handling per unit.",
      "Authored Standard Work Instructions (SWI), SOPs, Process Flow Diagrams, and MBOMs; developed PFMEA and Control Plans for new compressor lines.",
      "Supported robotic crane-assisted installation of heavy assemblies (running gear, air compressors, axles) on the backhoe loader line, improving installation repeatability and operator safety."
    ],
    dateRange: "Jan 2026 - Aug 2026"
  },
  {
    timelineType: 'work',
    name: "SRM Industries",
    title: "Manufacturing Engineering",
    techStack: "Sheet Metal Fabrication, CNC Machinery, DFM Reviews, Quality Assurance",
    summaryPoints: [
      "Owned sheet metal fabrication from raw material intake to final part delivery, operating CNC machinery and optimizing cutting paths for material utilization and throughput.",
      "Enforced quality through in-process and dimensional inspections, tracing recurring failure modes to corrective actions that reduced rework.",
      "Standardized fabrication practices and safety requirements across the work cell.",
      "Partnered with the design team on DFM reviews, driving part cost reduction and production efficiency gains."
    ],
    dateRange: "Jan 2025 - Jan 2026"
  },
  {
    timelineType: 'education',
    name: "Panimalar Engineering College",
    title: "Bachelor of Engineering, Mechanical Engineering",
    techStack: "GPA: 7.14 / 10 | Chennai, India",
    summaryPoints: [
      "Relevant Coursework: Mechanical Design & Simulation, Mechanics of Materials, Design of Transmission Systems, Engineering Mathematics.",
      "Professional Readiness for Innovation, Employability, Entrepreneurship, and Organizational Behavior & Ethical Practices."
    ],
    dateRange: "2021 - 2025"
  },
  {
    timelineType: 'work',
    name: "Chennai Metro Rail Limited (CMRL)",
    title: "Engineering Intern – Rolling Stock",
    techStack: "Rolling Stock Subsystems, Train Operations, Railway Standards",
    summaryPoints: [
      "Gained practical knowledge of rolling stock subsystems, train operations, and maintenance procedures across 24/7 transit operations.",
      "Mapped equipment reliability and failure modes against railway safety and performance standards."
    ],
    dateRange: "Jun 2024 - Jul 2024"
  },
  {
    timelineType: 'work',
    name: "SRM Industries",
    title: "Engineering Intern – Sheet Metal Fabrication",
    techStack: "Metal Cutting, Bending & Forming Machinery, Precision Tolerances",
    summaryPoints: [
      "Hands-on operation of metal cutting, bending, and forming machinery on production parts, holding tight dimensional tolerances.",
      "Gained shop-floor understanding of fabrication process capability and downstream assembly fit."
    ],
    dateRange: "May 2024 - Jun 2024"
  },
  {
    timelineType: 'work',
    name: "National Small Industries Corporation (NSIC)",
    title: "AI & Machine Learning Intern",
    techStack: "Python, Machine Learning, Data Preprocessing, Model Evaluation",
    summaryPoints: [
      "Developed and evaluated machine learning models end to end: data preprocessing, feature preparation, and model evaluation.",
      "Built foundational AI & ML skills applied to intelligent robotics and automated systems."
    ],
    dateRange: "Jan 2022 - Jan 2022"
  }
];

export const projectsData: Project[] = [
  {
    title: "Project BRIMSTONE: Liquid Propellant VTVL Rocket Lander",
    description: "Contributing to the propulsion subsystem of an autonomous liquid-propellant VTVL rocket lander for the Collegiate Propulsive Landing Challenge. Sizing the propellant feed system and performing pressure and flow analyses to optimize combustion performance alongside avionics and GNC teams.",
    techUsed: "Propulsion, Fluid Dynamics, GNC, Autonomous Systems, SolidWorks",
    image: { url: process.env.PUBLIC_URL + "/brimstone-lander.jpg" }
  },
  {
    title: "Structural Analysis & Experimental Validation of Hybrid Composite Car Body",
    description: "Designed and analyzed a lightweight automotive body using hybrid composite materials in CATIA and ANSYS. Manufactured and destructively tested specimens to validate the simulation model, achieving improved strength at 75% lower weight than conventional automotive materials.",
    techUsed: "CATIA, ANSYS, FEA Simulation, Composite Materials, Mechanical Testing",
    image: { url: process.env.PUBLIC_URL + "/structural-analysis.jpg" }
  },
  {
    title: "RFID-Based Intelligent Car Ignition System",
    description: "Developed an IoT and RFID-based automotive ignition system that requires a verified RFID tag integrated with the driver's license to start the vehicle, significantly boosting anti-theft security and automating ignition operations.",
    techUsed: "Embedded C, RFID, IoT, Automotive Electronics, Circuit Design",
    image: { url: process.env.PUBLIC_URL + "/rfid-project.jpg" }
  },
  {
    title: "Bio-Composite Material for Low-Weight Engineering Applications",
    description: "Investigated a sustainable bio-composite material fabricated by reinforcing Shorea robusta epoxy with snail shell particulates. Conducted mechanical characterization tests to evaluate tensile and flexural strength for lightweight engineering components.",
    techUsed: "Materials Science, Biocomposites, Mechanical Testing, Sustainable Engineering",
    image: { url: process.env.PUBLIC_URL + "/bio-composite.jpg" }
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Google Project Management",
    issuer: "Google / Coursera",
    issuedDate: "2024",
    link: "https://www.coursera.org/professional-certificates/google-project-management",
    iconName: "google"
  },
  {
    title: "Business Analysis and Process Management",
    issuer: "Coursera",
    issuedDate: "2024",
    link: "https://www.coursera.org",
    iconName: "coursera"
  },
  {
    title: "MATLAB and Control Concepts",
    issuer: "MathWorks",
    issuedDate: "2024",
    link: "https://www.mathworks.com",
    iconName: "matlab"
  },
  {
    title: "KUKA Robotics Workshop",
    issuer: "KUKA Robotics",
    issuedDate: "2024",
    link: "#",
    iconName: "robot"
  },
  {
    title: "Two-Day International Workshop on IC Engines and Electric Vehicles",
    issuer: "International Workshop",
    issuedDate: "2023",
    link: "#",
    iconName: "workshop"
  },
  {
    title: "Drone Technology Workshop",
    issuer: "Workshop",
    issuedDate: "2023",
    link: "#",
    iconName: "drone"
  }
];

export const contactMeData: ContactMe = {
  profilePicture: { url: process.env.PUBLIC_URL + "/profile.jpg" },
  name: "GHOWARTHAN KARUNANIDHI",
  title: "Robotics & Autonomous Systems Engineer",
  summary: "Currently pursuing M.S. in Robotics & Autonomous Systems at Arizona State University (Tempe, AZ). Former Manufacturing Engineer at Doosan Bobcat. Open to Summer 2027 Engineering Internships in Manufacturing, Robotics, Automation, and Supply Chain.",
  companyUniversity: "Arizona State University | Ex-Doosan Bobcat",
  linkedinLink: "https://www.linkedin.com/in/ghowarthan-k-5902a4284",
  email: "kghowarthan@gmail.com",
  phoneNumber: "+1 602 649 7117"
};

export const skillsData: Skill[] = [
  // Robotics & Autonomous Systems
  { name: "ROS 2", category: "Robotics & Autonomous Systems", description: "Robot Operating System for modular autonomy", icon: "SiRos" },
  { name: "Isaac Sim & Isaac Lab", category: "Robotics & Autonomous Systems", description: "NVIDIA robotics simulation and RL training", icon: "SiNvidia" },
  { name: "RViz", category: "Robotics & Autonomous Systems", description: "3D visualization tool for robotics sensor data", icon: "SiRviz" },
  { name: "Gazebo", category: "Robotics & Autonomous Systems", description: "Multi-robot physics simulation environment", icon: "SiGazebo" },
  { name: "KUKA Robotics", category: "Robotics & Autonomous Systems", description: "Industrial robot programming & operation", icon: "FaRobot" },
  { name: "Autonomous Systems", category: "Robotics & Autonomous Systems", description: "GNC, motion planning, and control architectures", icon: "FaBrain" },

  // CAD, FEA & Simulation
  { name: "SolidWorks", category: "CAD, FEA & Simulation", description: "3D CAD modeling, assembly fixtures & trolleys", icon: "SiSolidworks" },
  { name: "ANSYS", category: "CAD, FEA & Simulation", description: "Finite Element Analysis (FEA) & structural simulation", icon: "SiAnsys" },
  { name: "CATIA", category: "CAD, FEA & Simulation", description: "Automotive surface modeling and structural design", icon: "SiAutodesk" },
  { name: "Creo", category: "CAD, FEA & Simulation", description: "Parametric CAD and process routing definition", icon: "SiAutodesk" },
  { name: "Fusion 360", category: "CAD, FEA & Simulation", description: "Cloud CAD/CAM and generative design", icon: "SiAutodesk" },

  // Programming & Software
  { name: "Python", category: "Programming & Software", description: "Robotics, ML modeling, scripting & data analysis", icon: "FaPython" },
  { name: "C / C++", category: "Programming & Software", description: "Embedded systems, ROS nodes & performance computing", icon: "SiCplusplus" },
  { name: "MATLAB & Simulink", category: "Programming & Software", description: "Mathematical modeling, control systems & analysis", icon: "SiMathworks" },
  { name: "Linux (Ubuntu)", category: "Programming & Software", description: "Core OS for robotics development & deployment", icon: "FaLinux" },
  { name: "LabVIEW", category: "Programming & Software", description: "Instrument control and data acquisition", icon: "FaTools" },
  { name: "Git & GitHub", category: "Programming & Software", description: "Distributed version control and CI/CD", icon: "FaGitAlt" },

  // Manufacturing & Industrial Engineering
  { name: "EBOM to MBOM", category: "Manufacturing & Industrial Engineering", description: "Engineering to Manufacturing Bill of Materials", icon: "FaCogs" },
  { name: "Process Routing & PFD", category: "Manufacturing & Industrial Engineering", description: "Process Flow Diagrams and line routing", icon: "FaMap" },
  { name: "SOP & SWI", category: "Manufacturing & Industrial Engineering", description: "Standard Operating Procedures & Work Instructions", icon: "FaFileAlt" },
  { name: "PFMEA & Control Plans", category: "Manufacturing & Industrial Engineering", description: "Process Failure Mode and Effects Analysis", icon: "FaClipboardCheck" },
  { name: "First Article Inspection (FAI)", category: "Manufacturing & Industrial Engineering", description: "Quality validation and ECN change management", icon: "FaCheckCircle" },
  { name: "Lean, Kaizen & 5S", category: "Manufacturing & Industrial Engineering", description: "Continuous improvement and cycle time reduction", icon: "FaChartLine" },
  { name: "3D Printing & Prototyping", category: "Manufacturing & Industrial Engineering", description: "Rapid prototyping and additive manufacturing", icon: "FaPrint" },

  // Leadership & Management
  { name: "Project Management", category: "Leadership & Soft Skills", description: "Certified Google Project Management & Agile execution", icon: "FaTasks" },
  { name: "Operations & Line Setup", category: "Leadership & Soft Skills", description: "Greenfield line setup, vendor coordination & tooling", icon: "FaIndustry" },
  { name: "Technical Communication", category: "Leadership & Soft Skills", description: "Cross-functional engineering leadership & reporting", icon: "FaComments" },
  { name: "Event Coordination", category: "Leadership & Soft Skills", description: "PECMACT backend operations & Mechanical Symposium", icon: "FaUsers" }
];
