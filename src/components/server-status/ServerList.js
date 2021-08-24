import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchServerStatus } from '../../actions';
import ServerStatusRender from './ServerStatusRender';
import { region, serversStatic } from './server';

// ({servers})
const ServerList = ({ servers }) => {
  const { server_status } = servers;
  const dispatch = useDispatch();
  const request = () => {
    const response = dispatch(fetchServerStatus());
  };

  useEffect(() => {
    request();
  }, []);

  const serverRegion = region => {
    if (server_status) {
      return displayLiveOrOffData(region, server_status);
    }
    return displayLiveOrOffData(region, serversStatic);
  };

  const displayLiveOrOffData = (region, datapoint) => {
    return datapoint
      .filter(e => e.data_center)
      .filter(e => e.data_center.region === region);
  };

  const renderAllRegions = () => {
    return region.map(e => {
      return <ServerStatusRender location={e} servers={serverRegion(e)} />;
    });
  };
  return renderAllRegions();
};

const mapStateToProps = state => {
  return {
    servers: state.server_status,
  };
};

export default connect(mapStateToProps)(ServerList);
