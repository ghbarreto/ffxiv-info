import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchCharacter } from '../../actions';
import CharacterDisplay from './CharacterDisplay';

const CharacterIndex = ({ name, serverName, characterDetails }) => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState([]);
  // const characterDetails = fetchCharacters;

  const request = () => {
    const response = dispatch(fetchCharacter(name, serverName));
    return response;
  };

  useEffect(() => {
    // timer
    const timer = setTimeout(() => {
      request();
    }, 600);
    return () => clearTimeout(timer);
  }, [name, serverName]);

  if (!character) {
    return <div></div>;
  }

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <CharacterDisplay name={name} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characterDetails: state,
  };
};

export default connect(mapStateToProps, { fetchCharacter })(CharacterIndex);
