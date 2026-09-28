import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';

export type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif";
  const { profileName } = useParams<{ profileName: string }>();

  let normalizedProfile: ProfileType = 'recruiter';
  if (profileName === 'developer' || profileName === 'stalker' || profileName === 'adventurer') {
    normalizedProfile = profileName;
  } else if (profileName === 'adventure') {
    normalizedProfile = 'adventurer';
  }

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner />
      </div>
      <TopPicksRow profile={normalizedProfile} />
      <ContinueWatching profile={normalizedProfile} />
    </>
  );
};

export default ProfilePage;
