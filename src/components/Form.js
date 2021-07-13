import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]

const FormComponent = ({
  inputLabel,
  options,
  formSelectLabel,
  formSelectPlaceholder,
}) => {
  const option = [
    { key: `${options}`, text: `${options}`, value: `${options}` },
  ];

  return (
    <Form className="container">
      <Form.Group widths="equal">
        <Form.Input fluid label={inputLabel} placeholder={inputLabel} />
        <Form.Select
          fluid
          label={formSelectLabel}
          options={option}
          placeholder={formSelectPlaceholder}
        />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  );
};

export default FormComponent;
