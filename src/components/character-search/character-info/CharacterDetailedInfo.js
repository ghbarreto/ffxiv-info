import React from 'react';
import { Link } from 'react-router-dom';
import { cityIds } from '../../resources/cityIds';
import { races } from '../../resources/races';
import { tribes } from '../../resources/tribes';
import { gender } from '../../resources/gender';
import GrandCompanyDisplay from './GrandCompanyDisplay';
import './CharacterDetailedInfo.css';

const CharacterDetailedInfo = ({ character }) => {
  return (
    <div>
      <div className="free-company-profile">
        {!character.FreeCompanyName ? (
          'Not listed in any Free Companies'
        ) : (
          <div>
            {' '}
            <h5>Free Company</h5>
            <Link to={`/free-company/${character.FreeCompanyId}`}>
              <span>
                {character.FreeCompanyName
                  ? character.FreeCompanyName
                  : 'No Free Company'}
              </span>
            </Link>
          </div>
        )}

        <div>
          <div>City State</div>
          <div>{cityIds(character.Town)}</div>
        </div>

        <div className="add-margins profile-features">
          <div>
            <img
              alt="character avatar"
              style={{ borderRadius: '100px', width: '55px' }}
              src={character.Avatar}
            />
          </div>
          <div
            style={{ marginLeft: '10px', color: 'white', fontWeight: 'bold' }}
          >
            <span style={{ color: 'rgb(241, 182, 18)' }}>Race/Clan/Gender</span>
            <div style={{ marginTop: '5px' }}>{races(character.Race)}</div>
            <div style={{ marginTop: '2px' }}>{tribes(character.Tribe)}</div>
            <div style={{ marginTop: '2px' }}>{gender(character.Gender)}</div>
          </div>
        </div>
        <div>{character.Nameday}</div>
        <GrandCompanyDisplay id={character.GrandCompany} />
        <div
          style={{
            textAlign: 'center',
            position: 'sticky',
            marginTop: '20px',
            color: 'rgb(241, 182, 18)',
          }}
          className="bio"
        >
          {character.Bio}
        </div>
        {/* {console.log(character)} */}
      </div>
    </div>
  );
};

export default CharacterDetailedInfo;
