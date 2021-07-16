import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchCharacterInfo } from '../../actions';
import CharacterInfoDisplay from './CharacterInfoDisplay';

// const PARAMS = match.params.id
const CharacterInfo = props => {
  const PARAMS = props.match.params.id;
  const { characterDetails } = props.characterInfo;
  const dispatch = useDispatch();

  const request = async () => {
    const response = await dispatch(fetchCharacterInfo(PARAMS));
    return response;
  };

  useEffect(() => {
    request();
  }, []);

  return characterDetails ? (
    <CharacterInfoDisplay info={characterDetails.fetchCharacterInfo} />
  ) : (
    <div></div>
  );
};

const mapStateToProps = state => {
  return {
    characterInfo: state,
  };
};

export default connect(mapStateToProps, { fetchCharacterInfo })(CharacterInfo);
