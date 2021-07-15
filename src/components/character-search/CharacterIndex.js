import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharacter } from '../../actions';

const CharacterIndex = ({ name, serverName, characterData }) => {
  const [character, setCharacter] = useState([]);

  const request = async () => {
    const response = await fetchCharacter(name, serverName);
    console.log(characterData);
    if (response) return setCharacter(response);
  };
  console.log(character);
  useEffect(() => {
    request();
  }, [name, serverName]);

  return (
    <div>
      {name}, {serverName}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characterData: state,
  };
};

export default connect(mapStateToProps, fetchCharacter)(CharacterIndex);
