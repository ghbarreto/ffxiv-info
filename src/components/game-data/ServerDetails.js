import React from 'react';
import ServerRender from './ServerRender';

const ServerDetails = ({ datacenters }) => {
  // server input will render the form with the desired server
  return (
    <div>
      <ServerRender listOfDatacenters={datacenters} />
    </div>
  );
};

export default ServerDetails;
