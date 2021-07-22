import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';

const ServerRender = ({
  listOfDatacenters,

  inputLabel,
  inputPlaceholder,
  formSelectLabel,
  formSelectPlaceholder,
  serverLabel,
  serverPlaceholder,
  inputValue,
  serverChoice,
}) => {
  const [datacenter, setDatacenter] = useState('');
  const [servers, setServers] = useState({});

  const displayServers = () => {
    // in case datacenter doesnt exist returns null
    if (!datacenter) return null;
    // returning the list of servers based on the comparison to datacenter
    for (let i in listOfDatacenters) {
      if (datacenter === i) {
        return setServers(listOfDatacenters[i]);
      }
    }
    return null;
  };

  useEffect(() => {
    displayServers();
  }, [datacenter]);

  const dataBackToParent = e => {
    setDatacenter(e.target.innerText);
  };

  const serversAvailable = () => {
    if (servers.length > 1) {
      return (
        <Form.Select
          fluid
          label={serverLabel}
          placeholder={serverPlaceholder}
          onChange={e => serverChoice(e.target.innerText)}
          options={Object.values(servers).map(server => {
            return {
              key: server,
              text: server,
              value: server,
            };
          })}
        ></Form.Select>
      );
    }
    return null;
  };

  return (
    <Form inverted className="container">
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label={inputLabel}
          placeholder={inputPlaceholder}
          onChange={e => inputValue(e.target.value)}
        />
        <Form.Select
          fluid
          label={formSelectLabel}
          onChange={e => dataBackToParent(e)}
          options={Object.keys(listOfDatacenters).map(datacenters => {
            return {
              key: datacenters,
              text: datacenters,
              value: datacenters,
            };
          })}
          placeholder={formSelectPlaceholder}
        />
        {serversAvailable()}
      </Form.Group>
    </Form>
  );
};

export default ServerRender;
