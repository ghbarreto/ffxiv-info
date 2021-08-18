import React, { useState, useEffect } from 'react';
import { database } from './server';
import ServerDisplayListings from './ServerDisplayListings';

const ServerStatusRender = ({ servers, location }) => {
  const { server_status } = servers ? servers : null;

  // console.log(servers.filter(e => e.data_center).filter(e => e.name));

  const displayServersClearer = db => {
    return servers
      .filter(e => e.data_center)
      .filter(e => e.data_center.name === `${db}`);
  };

  const displayAllServersSeparately = () => {
    return database.map(e => (
      <ServerDisplayListings location={e} servers={displayServersClearer(e)} />
    ));
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <h1>{location}</h1>
      <div>{displayAllServersSeparately()}</div>
    </div>
  );
};

export default ServerStatusRender;

// const sendDatacenters = () => {
//   try {
//     Object(server_status).map(sv => {
//       if (sv.data_center !== null) displayServers(sv.data_center);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const displayServers = dcs => {
//   return Object(server_status).map(servers => {
//     console.log(servers);
//   });
// };

// useEffect(() => {
//   // sendDatacenters();
// }, [servers]);
