import React, { useState, useEffect } from 'react';
import Form from '../Form';

const ServerRender = ({ listOfDatacenters }) => {
  const [datacenter, setDatacenter] = useState('');

  const displayServers = () => {
    // in case datacenter doesnt exist returns null
    if (!datacenter) return null;

    // returning the list of servers based on the comparison to datacenter
    for (let i in listOfDatacenters) {
      if (datacenter === i) {
        return listOfDatacenters[i].map(item => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        });
      }
    }
  };

  {
    /* <Form
        formSelectLabel="Datacenters"
        formSelectPlaceholder="Datacenters"
        options={datacenter}
      /> */
  }

  const displayDatacenters = () => {
    let option = [{ key: String, text: String, value: String }];

    Object.keys(listOfDatacenters).map(datacenter => {
      console.log(datacenter);
    });
    console.log(option);
  };

  useEffect(() => {
    displayServers();
  }, [datacenter]);

  const display = () => {
    return (
      <select onChange={e => setDatacenter(e.target.value)}>{display}</select>
    );
  };

  return (
    <form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {datacenter ? <select>{displayServers()}</select> : null}
        <input type="submit" value="Submit" />
        {displayDatacenters()}
      </div>
    </form>
  );
};

export default ServerRender;
