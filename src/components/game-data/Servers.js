import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchDatacenter } from '../../actions';
import ServerRender from './ServerRender';
import Spinner from '../Spinner';

const Servers = props => {
  const [datacenters, setDatacenters] = useState('');

  const request = async () => {
    const response = await fetchDatacenter();
    if (response) setDatacenters(props.gameData.gameData.datacenters);
  };

  useEffect(() => {
    request();
  });

  return datacenters ? (
    <div>
      <ServerRender
        inputValue={props.inputValue}
        databaseChoice={props.databaseChoice}
        listOfDatacenters={datacenters}
        serverChoice={props.serverChoice}
        inputLabel={props.inputLabel}
        inputPlaceholder={props.inputPlaceholder}
        formSelectLabel={props.formSelectLabel}
        formSelectPlaceholder={props.formSelectPlaceholder}
        serverLabel={props.serverLabel}
        serverPlaceholder={props.serverPlaceholder}
      />
    </div>
  ) : (
    <Spinner loading="Fetching Data" />
  );
};

const mapStateToProps = state => {
  return {
    gameData: state,
  };
};

export default connect(mapStateToProps, fetchDatacenter)(Servers);
