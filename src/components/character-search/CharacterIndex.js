import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchCharacter } from '../../actions';
import CharacterDisplay from './CharacterDisplay';
import Servers from '../game-data/Servers';

const CharacterIndex = () => {
  const dispatch = useDispatch();
  // const characterDetails = fetchCharacters;
  const [name, setName] = useState('');
  const [server, setServer] = useState('');

  const request = () => {
    const response = dispatch(fetchCharacter(name, server));
    return response;
  };

  useEffect(() => {
    // timer
    const timer = setTimeout(() => {
      request();
    }, 600);
    return () => clearTimeout(timer);
  }, [name, server]);

  const inputValue = e => {
    setName(e);
  };

  const serverChoice = e => {
    setServer(e);
  };

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <Servers inputValue={inputValue} serverChoice={serverChoice} />
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
