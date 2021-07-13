import React, { useState, useEffect } from 'react';

const ServerInput = props => {
  const [datacenter, setDatacenter] = useState('');

  const displayServers = () => {
    // in case datacenter doesnt exist returns null
    if (!datacenter) return null;

    // returning the list of servers based on the comparison to datacenter
    for (let i in props.listOfDatacenters) {
      if (datacenter === i) {
        return props.listOfDatacenters[i].map(item => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        });
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  const onChange = e => {
    console.log(e.target);
  };

  useEffect(() => {
    displayServers();
  }, [datacenter]);

  const display = () => {
    return (
      <select onChange={e => setDatacenter(e.target.value)}>
        {props.display}
      </select>
    );
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <label>Character Name</label>
        <input name="character" onChange={e => onChange(e)} />
        {display()}
        {datacenter ? <select>{displayServers()}</select> : null}
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default ServerInput;
