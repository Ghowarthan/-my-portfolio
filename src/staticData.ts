
import {
    ProfileBanner,
    WorkPermit,
    TimelineItem,
    Project,
    Certification,
    ContactMe,
    Skill
} from './types';

// Placeholder data - Replace with your actual profile information

export const profileBannerData: ProfileBanner = {
    backgroundImage: { url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
    headline: "Robotics & Automation Engineer | Mechanical Engineering Graduate",
    resumeLink: {
        url: "/resume.png"
    },
    linkedinLink: "https://www.linkedin.com/in/ghowarthan-k-5902a4284",
    profileSummary: "Passionate engineer with a strong foundation in mechanical systems and a growing expertise in robotics, automation, and AI-driven technologies. Skilled in ROS2, Python, C++, CAD & simulation (SolidWorks, ANSYS), and robotic system integration. Aspiring to build intelligent, scalable automation solutions for next-generation industries."
};

export const workPermitData: WorkPermit = {
    visaStatus: "Citizen",
    expiryDate: new Date("2099-12-31"),
    summary: "Authorized to work in India",
    additionalInfo: "Open to relocation"
};

export const timelineData: TimelineItem[] = [
    {
        timelineType: 'work',
        name: "Chennai Metro Rail Limited (CMRL)",
        title: "Intern",
        techStack: "Rolling Stock, Train Operations, Maintenance",
        summaryPoints: [
            "Gained practical knowledge of rolling stock subsystems.",
            "Understood safety and performance standards in railway operations."
        ],
        dateRange: "Jun 2024 - Jul 2024"
    },
    {
        timelineType: 'work',
        name: "SRM Industries",
        title: "Intern",
        techStack: "Metal Fabrication, Machinery Operation",
        summaryPoints: [
            "Hands-on experience in metal cutting, bending, and forming.",
            "Operated machinery ensuring precision and safety standards."
        ],
        dateRange: "May 2024 - Jun 2024"
    },
    {
        timelineType: 'work',
        name: "National Small Scale Industry Corporation",
        title: "AI & ML Training and Internship",
        techStack: "AI, ML, Data Preprocessing",
        summaryPoints: [
            "Developed and implemented machine learning models.",
            "Focused on data preprocessing, model training, and evaluation."
        ],
        dateRange: "Jan 2022 - Jan 2022"
    },
    {
        timelineType: 'education',
        name: "Panimalar Engineering College",
        title: "Bachelor of Engineering, Mechanical Engineering",
        techStack: "GPA: 7.14/10",
        summaryPoints: [
            "Relevant Coursework: Engineering Mathematics, Mechanical Design & Simulation.",
            "Mechanics of Materials, Design and Transmission Systems."
        ],
        dateRange: "2021 - 2025"
    }
];

export const projectsData: Project[] = [
    {
        title: "Bio composite material For Low-Weight Engineering Applications",
        description: "Investigated bio-composite material reinforced with snail shell particulates to explore potential for low-weight engineering applications.",
        techUsed: "Materials Science, Research",
        image: { url: "/bio-composite.jpg" }
    },
    {
        title: "RFID-Based Car Ignition System",
        description: "Enhanced security by requiring an RFID tag for ignition, reducing theft risk and automating ignition for smoother operations.",
        techUsed: "IoT, RFID, Automation",
        image: { url: "/rfid-project.jpg" }
    },
    {
        title: "Structural Analysis of Hybrid Composite",
        description: "Designed and analyzed a car body using hybrid composite materials in CATIA and ANSYS. Confirmed simulation accuracy with experimental validation.",
        techUsed: "CATIA, ANSYS, Simulation",
        image: { url: "/structural-analysis.jpg" }
    }
];

export const certificationsData: Certification[] = [
    {
        title: "Google Project Management",
        issuer: "Google",
        issuedDate: "2023",
        link: "#",
        iconName: "google"
    },
    {
        title: "Business Analysis and Process Management",
        issuer: "Coursera",
        issuedDate: "2023",
        link: "#",
        iconName: "coursera"
    },
    {
        title: "MATLAB and Control Concepts",
        issuer: "Online",
        issuedDate: "2023",
        link: "#",
        iconName: "matlab"
    },
    {
        title: "Two-day International Workshops on IC Engines and Electric Vehicles",
        issuer: "Workshop",
        issuedDate: "2022",
        link: "#",
        iconName: "workshop"
    },
    {
        title: "Drone Workshop",
        issuer: "Workshop",
        issuedDate: "2022",
        link: "#",
        iconName: "drone"
    }
];

export const contactMeData: ContactMe = {
    profilePicture: { url: "/profile.jpg" },
    name: "GHOWARTHAN K",
    title: "Mechanical Engineer",
    summary: "Feel free to reach out for collaborations or opportunities in Robotics and Automation.",
    companyUniversity: "Panimalar Engineering College",
    linkedinLink: "https://www.linkedin.com/in/ghowarthan-k-5902a4284",
    email: "kghowarthan2003@gmail.com",
    phoneNumber: "+91 8610138114"
};

export const skillsData: Skill[] = [
    { name: "ROS2", category: "Robotics", description: "Robot Operating System", icon: "SiRos" },
    { name: "Python", category: "Programming", description: "Scripting & Automation", icon: "FaPython" },
    { name: "C/C++", category: "Programming", description: "Embedded Systems", icon: "SiCplusplus" },
    { name: "SolidWorks", category: "CAD/Simulation", description: "3D Modeling", icon: "SiSolidworks" },
    { name: "ANSYS", category: "CAD/Simulation", description: "FEA Simulation", icon: "SiAnsys" },
    { name: "MATLAB", category: "Tools", description: "Data Analysis", icon: "SiMathworks" },
    { name: "Fusion 360", category: "CAD/Simulation", description: "CAD/CAM", icon: "SiAutodesk" },
    { name: "3D Printing", category: "Prototyping", description: "Rapid Prototyping", icon: "FaPrint" },
    // MERN / Full Stack Skills
    { name: "MongoDB", category: "MERN Stack", description: "NoSQL Database", icon: "SiMongodb" },
    { name: "Express.js", category: "MERN Stack", description: "Web Application Framework", icon: "SiExpress" },
    { name: "React.js", category: "MERN Stack", description: "Frontend Library", icon: "FaReact" },
    { name: "Node.js", category: "MERN Stack", description: "Runtime Environment", icon: "FaNodeJs" },
    { name: "JavaScript", category: "Full Stack", description: "Programming Language", icon: "SiJavascript" },
    { name: "HTML5", category: "Full Stack", description: "Markup Language", icon: "SiHtml5" },
    { name: "CSS3", category: "Full Stack", description: "Style Sheet Language", icon: "SiCss3" },
    { name: "Git", category: "Tools", description: "Version Control", icon: "FaGitAlt" },
    { name: "TypeScript", category: "Full Stack", description: "Typed Superset of JS", icon: "SiTypescript" },
    // Robotics Stack
    { name: "ROS", category: "Robotics Stack (Currently Learning)", description: "Robot Operating System (ROS1 & ROS2)", icon: "SiRos" },
    { name: "Gazebo", category: "Robotics Stack (Currently Learning)", description: "3D Robotics Simulator", icon: "SiGazebo" },
    { name: "Rviz", category: "Robotics Stack (Currently Learning)", description: "3D Visualization Tool", icon: "SiRviz" },
    { name: "Hector SLAM", category: "Robotics Stack (Currently Learning)", description: "2D SLAM Technique", icon: "SiHectorSlam" },
    { name: "Machine Learning", category: "Robotics Stack (Currently Learning)", description: "AI/ML in Robotics", icon: "SiMachineLearning" }
];
