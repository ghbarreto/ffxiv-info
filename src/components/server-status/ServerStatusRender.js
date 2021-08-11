import React, { useState, useEffect } from 'react';

const ServerStatusRender = ({ servers }) => {
  const { server_status } = servers ? servers : null;

  const sendDatacenters = () => {
    try {
      Object(server_status).map(sv => {
        if (sv.data_center !== null) displayServers(sv.data_center);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const displayServers = dcs => {
    return Object(server_status).map(servers => {
      console.log(servers);
    });
  };

  useEffect(() => {
    sendDatacenters();
  }, [servers]);

  return <div></div>;
};

export default ServerStatusRender;
