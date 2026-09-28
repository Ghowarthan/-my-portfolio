import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

export type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: Record<string, Array<{ title: string; imgSrc: string; link: string }>> = {
  recruiter: [
    { title: "Technical Articles", imgSrc: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80", link: "/blogs" },
    { title: "Books & Learning", imgSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80", link: "/reading" },
    { title: "Music & Interests", imgSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80", link: "/music" },
    { title: "Get in Touch", imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", link: "/contact-me" }
  ],
  developer: [
    { title: "Technical Articles", imgSrc: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80", link: "/blogs" },
    { title: "Books & Growth", imgSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80", link: "/reading" },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80", link: "/certifications" },
    { title: "Get in Touch", imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", link: "/contact-me" }
  ],
  stalker: [
    { title: "Books & Growth", imgSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80", link: "/reading" },
    { title: "Technical Articles", imgSrc: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80", link: "/blogs" },
    { title: "Music & Interests", imgSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80", link: "/music" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", link: "/contact-me" }
  ],
  adventurer: [
    { title: "Music & Rock", imgSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80", link: "/music" },
    { title: "Books & Mindset", imgSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80", link: "/reading" },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80", link: "/certifications" },
    { title: "Connect", imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile] || continueWatchingConfig.recruiter;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
