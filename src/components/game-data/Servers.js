import React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDatacenter } from '../../actions';
import ServerDetails from './ServerDetails';

const Servers = props => {
  const [datacenters, setDatacenters] = useState([]);

  const request = async () => {
    const response = await fetchDatacenter();
    if (response) setDatacenters(props.gameData.gameData.datacenters);
  };

  useEffect(() => {
    request();
  });

  return datacenters ? (
    <div>
      <ServerDetails datacenters={datacenters} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

const mapStateToProps = state => {
  return {
    gameData: state,
  };
};

export default connect(mapStateToProps, fetchDatacenter)(Servers);
