import React from 'react';
import ServerInput from './ServerInput';

const ServerDetails = ({ datacenters }) => {
  // display the datacenters of final fantasy xiv
  const displayDatacenters = () => {
    return Object.keys(datacenters).map(datacenter => {
      return (
        <option key={datacenter} value={datacenter}>
          {datacenter}
        </option>
      );
    });
  };

  // server input will render the form with the desired server
  return (
    <div>
      <ServerInput
        display={displayDatacenters()}
        listOfDatacenters={datacenters}
      />
    </div>
  );
};

export default ServerDetails;
