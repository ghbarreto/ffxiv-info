import React from 'react';
import { Link } from 'react-router-dom';
import { cityIds } from '../../resources/cityIds';
import { races } from '../../resources/races';
import { gender } from '../../resources/gender';

const CharacterDetailedInfo = ({ character }) => {
  console.log(character);
  return (
    <div>
      <div className="free-company-profile">
        <h5>Free Company</h5>
        <Link to={`/free-company/${character.FreeCompanyId}`}>
          <span>{character.FreeCompanyName}</span>
        </Link>
      </div>

      <div>{cityIds(character.Town)}</div>
      <div>
        <div>
          {races(character.Race)} {gender(character.Gender)}
        </div>
        <div>{character.Nameday}</div>

        <div className="bio">{character.Bio}</div>
      </div>
    </div>
  );
};

export default CharacterDetailedInfo;
