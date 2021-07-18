import React from 'react';
import './CharacterProfile.css';

import { cityIds } from '../../resources/cityIds';
import CharacterTitle from './CharacterTitle';

const CharacterProfile = ({
  profileName,
  profileFreeCompany,
  freeCompanyID,
  datacenter,
  server,
  profileAvatar,
  profileTitle,
  profileTown,
}) => {
  return (
    <div className="flex-box">
      <div className="left-flex">
        <img className="profile-avatar" src={profileAvatar} alt="profile" />
      </div>
      <div className="right-flex">
        <div className="profile-name">{profileName}</div>
        <div className="profile-title">
          {profileTitle ? <CharacterTitle title={profileTitle} /> : null}
        </div>
        <div className="free-company">
          FC -{' '}
          <a style={{ color: 'rgb(241, 182, 18)' }} href={freeCompanyID}>
            {profileFreeCompany}
          </a>{' '}
          AJUSTAR LINK
        </div>
        {/* <div className="profile-town">{cityIds(profileTown)}</div> */}
        <div className="datacenter">
          {server} - {datacenter}
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
