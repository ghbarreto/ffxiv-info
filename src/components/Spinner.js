import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const Spinner = ({ loading }) => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content={loading} />
      </Dimmer>

      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  </div>
);

export default Spinner;
