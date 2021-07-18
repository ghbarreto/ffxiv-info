import React from 'react';
import './CharacterProfile.css';
import { classJobs } from '../../resources/classJobs';

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
  activeClass,
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
        {activeClass.UnlockedState.ID ? (
          <div>
            <img
              className="classImageProfile"
              alt={activeClass.UnlockedState.Name}
              src={classJobs(activeClass.UnlockedState.ID)}
            />
            <div className="level">
              {activeClass.Level} - {activeClass.UnlockedState.Name}
            </div>
          </div>
        ) : (
          <div>
            <img
              className="classImageProfile"
              alt={activeClass.Name}
              src={classJobs(activeClass.ClassID)}
            />
            <div className="level">
              {activeClass.Level} -{' '}
              {activeClass.Name.substring(
                activeClass.Name.lastIndexOf('/') + 1
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterProfile;
