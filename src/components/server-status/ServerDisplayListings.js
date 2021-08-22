import React from 'react';
import Table from '../Table';

const ServerDisplayListings = ({ servers }) => {
  const displayServers = () => {
    return <Table server_status={servers} />;
  };
  const displayDatabases = () => {
    for (let i in servers)
      return <Table server_name={servers[i].data_center.name} />;
  };

  return (
    <div
      style={{ display: 'inline-table', marginTop: '30px', padding: '10px' }}
    >
      {displayDatabases()}
      {displayServers()}
    </div>
  );
};

export default ServerDisplayListings;
