import React from 'react';
import { Loader } from 'semantic-ui-react';

const SmallSpinner = ({ loading }) => (
  <Loader active inline="centered">
    {loading}
  </Loader>
);

export default SmallSpinner;
