import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const Spinner = ({ loading }) => (
  <Dimmer
    active
    style={{
      height: '100px',
      width: '100px',
      marginLeft: '50%',
      marginTop: '20px',
    }}
  >
    <Loader inverted content={loading} />
  </Dimmer>
);

export default Spinner;
