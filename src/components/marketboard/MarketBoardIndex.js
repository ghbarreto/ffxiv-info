import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetch_marketable_items } from '../../actions';
import Servers from '../game-data/Servers';
import Table from '../Table';
import SmallSpinner from './../SmallSpinner';
import DisplayAlert from '../DisplayAlert';

const MarketBoardIndex = props => {
  const [name, setName] = useState('');
  const [server, setServer] = useState('');
  const [database, setDatabase] = useState('');
  const { marketable_items } = props.marketboard.gameData;

  const database_choice = database ? `/${database}` : '/null';
  const server_choice = server ? `/${server}` : '/null';

  const dispatch = useDispatch();
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
        <Table
          tableHeaderFirst={'Item'}
          tableHeaderSecond={'Select Item'}
          database_choice={database_choice}
          server_choice={server_choice}
          items={marketable_items.Results}
        />
      ) : (
        <SmallSpinner loading={'Fetching items'} />
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
