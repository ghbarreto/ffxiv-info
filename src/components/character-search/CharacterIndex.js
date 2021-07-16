import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchCharacter } from '../../actions';
import CharacterDisplay from './CharacterDisplay';

const CharacterIndex = props => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState();

  const request = async () => {
    const response = await dispatch(
      fetchCharacter(props.name, props.serverName)
    );
    return response;
  };

  useEffect(() => {
    // timer
    const timer = setTimeout(() => {
      const { characterDetails } = props.characterDetails;
      request();
      if (characterDetails.fetch)
        return setCharacter(characterDetails.fetch.Results);
    }, 200);

    return () => clearTimeout(timer);
  }, [props.name, props.serverName]);

  console.log(character);
  return (
    <div className="container">
      {!character ? null : <CharacterDisplay character={character} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characterDetails: state,
  };
};

export default connect(mapStateToProps, { fetchCharacter })(CharacterIndex);
