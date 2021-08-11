import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchServerStatus } from '../../actions';
import ServerStatusRender from './ServerStatusRender';

const ServerList = ({ servers }) => {
  const dispatch = useDispatch();
  const request = () => {
    const response = dispatch(fetchServerStatus());
  };

  useEffect(() => {
    request();
  }, []);

  return <ServerStatusRender servers={servers} />;
};

const mapStateToProps = state => {
  return {
    servers: state.server_status,
  };
};

export default connect(mapStateToProps)(ServerList);
