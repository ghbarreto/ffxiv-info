import React from 'react';
// e.data_center.map(e => e.data_center.name)
const ServerDisplayListings = ({ servers, location }) => {
  // console.log(Object.values(location).filter(e => e.name));

  const displayServers = () => {
    return servers.map(e => {
      return (
        <div style={{ display: 'inline-block' }}>
          <li>{e.name}</li>
          <li>{e.status}</li>
          <li>{e.congestion}</li>
          <li>{e.creation}</li>
          {/* <li>{e.last_online}</li> */}
        </div>
      );
    });
  };
  return (
    <div>
      <ul style={{ color: 'white' }}>{displayServers()}</ul>
    </div>
  );
};

export default ServerDisplayListings;
