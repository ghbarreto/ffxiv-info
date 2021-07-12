import React, { useState } from 'react';

const ServerInput = props => {
  const [datacenter, setDatacenter] = useState('');

  const display = () => {
    return (
      <select onChange={e => setDatacenter(e.target.value)}>
        {props.display}
      </select>
    );
  };

  return <div>{display()}</div>;
};

export default ServerInput;
