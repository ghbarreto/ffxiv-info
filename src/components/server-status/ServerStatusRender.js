import React from 'react';
import { database } from './server';
import ServerDisplayListings from './ServerDisplayListings';
import Table from '../Table';

const ServerStatusRender = ({ servers, location }) => {
  // console.log(servers.filter(e => e.data_center).filter(e => e.name));

  const displayServersClearer = db => {
    if (servers) {
      return servers
        .filter(e => e.data_center)
        .filter(e => {
          if (e.data_center.name === `${db}`) return e.data_center.name;
        });
    }
    return null;
  };

  const displayAllServersSeparately = () => {
    return database.map(e => (
      <ServerDisplayListings location={e} servers={displayServersClearer(e)} />
    ));
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <Table regions={location} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>{displayAllServersSeparately()}</div>
      </div>
    </div>
  );
};

export default ServerStatusRender;
