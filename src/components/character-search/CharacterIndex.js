import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchCharacter } from '../../actions';
import CharacterDisplay from './CharacterDisplay';
import Servers from '../game-data/Servers';

import Spinner from '../Spinner';

const CharacterIndex = () => {
  const dispatch = useDispatch();
  // const characterDetails = fetchCharacters;
  const [name, setName] = useState('');
  const [server, setServer] = useState('');
  const [loading, setLoading] = useState(false);

  const request = () => {
    const response = dispatch(fetchCharacter(name, server));
    return response;
  };

  useEffect(() => {
    // timer
    const timer = setTimeout(() => {
      request();
      setLoading(true);
    }, 600);
    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, [name, server]);

  const inputValue = e => {
    setName(e);
  };

  const serverChoice = e => {
    setServer(e);
  };

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <Servers
        inputValue={inputValue}
        serverChoice={serverChoice}
        inputLabel={'Character Name'}
        inputPlaceholder={'Character Name'}
        formSelectLabel={'Select a Database'}
        formSelectPlaceholder={'Database'}
        serverLabel={'Select a Server'}
        serverPlaceholder={'Server'}
      />
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
