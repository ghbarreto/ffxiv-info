import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchTitle } from '../../../actions';

const CharacterTitle = ({ title, propsTitle }) => {
  const dispatch = useDispatch();

  const request = () => {
    if (title) {
      const response = dispatch(fetchTitle(title));
      return response;
    }
    return;
  };

  useEffect(() => {
    // timer
    request();
  }, [title]);

  return <div>{propsTitle > 0 ? `<- ${propsTitle.Name} ->` : ''}</div>;
};

const mapStateToProps = state => {
  return {
    propsTitle: state.gameData.title,
  };
};

export default connect(mapStateToProps, { fetchTitle })(CharacterTitle);
