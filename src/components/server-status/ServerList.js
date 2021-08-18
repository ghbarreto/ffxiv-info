import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchServerStatus } from '../../actions';
import ServerStatusRender from './ServerStatusRender';
import { servers, region } from './server';

// ({servers})
const ServerList = () => {
  const serverRegion = region => {
    return servers
      .filter(e => e.data_center)
      .filter(e => e.data_center.region === `${region}`);
  };

  const renderAllRegions = () => {
    return region.map(e => (
      <ServerStatusRender location={e} servers={serverRegion(e)} />
    ));
  };

  return renderAllRegions();
};

const mapStateToProps = state => {
  return {
    servers: state.server_status,
  };
};

export default connect(mapStateToProps)(ServerList);

// const dispatch = useDispatch();
//   const request = () => {
//     const response = dispatch(fetchServerStatus());
//   };

//   useEffect(() => {
//     request();
//   }, []);
