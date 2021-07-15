import React from 'react';
import { Form } from 'semantic-ui-react';

const FormComponent = ({
  inputLabel,
  inputPlaceholder,
  formSelectLabel,
  formSelectPlaceholder,
  datacenters = [],
  getDatacenter,
  servers,
  serverChoice,
  inputValue,
}) => {
  const dataBackToParent = e => {
    if (getDatacenter) return getDatacenter(e.target.innerText);
    return null;
  };

  const serverBackToParent = e => {
    return serverChoice(e.target.innerText);
  };

  const serversAvailable = () => {
    return (
      <Form.Select
        fluid
        label="Server"
        placeholder="Server"
        onChange={e => serverBackToParent(e)}
        options={Object.values(servers).map(server => {
          return {
            key: server,
            text: server,
            value: server,
          };
        })}
      ></Form.Select>
    );
  };

  return (
    <Form className="container">
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
          options={Object.keys(datacenters).map(datacenter => {
            return {
              key: datacenter,
              text: datacenter,
              value: datacenter,
            };
          })}
          placeholder={formSelectPlaceholder}
        />
        {servers.length > 1 ? serversAvailable() : null}
      </Form.Group>
    </Form>
  );
};

export default FormComponent;
