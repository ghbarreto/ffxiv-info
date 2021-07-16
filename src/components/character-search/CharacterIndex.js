import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharacter } from '../../actions';

const CharacterIndex = props => {
  const [character, setCharacter] = useState([]);

  const request = async () => {
    const response = await fetchCharacter(props.name);
    if (response) console.log(response.data);
    response();
  };

  useEffect(() => {
    request();
  }, [props.name]);

  return (
    <div>
      {props.name}, {props.serverName}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characterDetails: state,
  };
};

export default connect(mapStateToProps, fetchCharacter)(CharacterIndex);
