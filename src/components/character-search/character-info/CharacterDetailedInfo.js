import React from 'react';
import { Link } from 'react-router-dom';
import { cityIds } from '../../resources/cityIds';
import { races } from '../../resources/races';
import { tribes } from '../../resources/tribes'
import { gender } from '../../resources/gender';
import './CharacterDetailedInfo.css'

const CharacterDetailedInfo = ({ character }) => {
  return (
    <div>
      <div className="free-company-profile">
        {!character.FreeCompanyName ? 'Not listed in any Free Companies' :
          (
            <div> <h5>Free Company</h5>
              <Link to={`/free-company/${character.FreeCompanyId}`}>
                <span>{character.FreeCompanyName ? character.FreeCompanyName : 'No Free Company'}</span>
              </Link>
            </div>
          )}
      </div>

      <div>
        <div>City State</div>
        <div>
          {cityIds(character.Town)}
        </div>
      </div>

      <div className='add-margins profile-features'>
        <div>
          <img style={{ borderRadius: '100px', width: '55px' }} src={character.Avatar} />
        </div>
        <div style={{ marginLeft: '10px' }}>
          Race/Clan/Gender
          <div>
            {races(character.Race)} {gender(character.Gender)} {tribes(character.Tribe)}
          </div>
        </div>
      </div>
      <div>{character.Nameday}</div>
      {console.log(character)}
      <div className="bio">{character.Bio}</div>
    </div>
  );
};

export default CharacterDetailedInfo;
