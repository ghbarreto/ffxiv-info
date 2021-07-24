import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetch_marketable_items } from '../../actions';
import Servers from '../game-data/Servers';
import DisplayMarketBoardItems from './DisplayMarketBoardItems';
import SmallSpinner from './../SmallSpinner';

const MarketBoardIndex = props => {
  const [name, setName] = useState('');
  const [server, setServer] = useState('');
  const [database, setDatabase] = useState('');
  const { marketable_items } = props.marketboard.gameData;

  const dispatch = useDispatch();
  // const characterDetails = fetchCharacters;
  const request = () => {
    const response = dispatch(fetch_marketable_items(name));
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

  const databaseChoice = e => {
    setDatabase(e);
  };

  return (
    <div>
      <Servers
        inputValue={inputValue}
        serverChoice={serverChoice}
        databaseChoice={databaseChoice}
        inputLabel={'Market Board Search'}
        inputPlaceholder={'Search Item'}
        formSelectLabel={'Select a Database'}
        formSelectPlaceholder={'Database'}
        serverLabel={'Select a Server'}
        serverPlaceholder={'Server'}
      />

      {marketable_items ? (
        <DisplayMarketBoardItems items={marketable_items.Results} />
      ) : (
        <SmallSpinner loading={'Fetching items.'} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    marketboard: state,
  };
};

export default connect(mapStateToProps, { fetch_marketable_items })(
  MarketBoardIndex
);
