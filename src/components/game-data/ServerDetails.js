import React from 'react';
import ServerInput from './ServerInput';

const ServerDetails = ({ datacenters }) => {
  const displayDatacenters = () => {
    return Object.keys(datacenters).map(datacenter => {
      return (
        <option key={datacenter} value={datacenter}>
          {datacenter}
        </option>
      );
    });
  };

  const displayServers = datacenter => {
    Object.keys(datacenters).map(a =>
      a === datacenter ? Object.values(b => console.log(b)) : null
    );
    return Object.values(datacenter).map(servers => {
      return (
        <option key={servers} value={servers}>
          {servers}
        </option>
      );
    });
  };

  return (
    <div>
      <ServerInput
        display={displayDatacenters()}
        displayServers={displayServers}
      />
    </div>
  );
};

export default ServerDetails;
