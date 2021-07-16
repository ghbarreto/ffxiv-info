import React from 'react';

import { Grid, Segment } from 'semantic-ui-react';

const CharacterInfoDisplay = ({ info }) => {
  if (info) console.log(info.Character.ClassJobs);

  return (
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column width={3}>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>122</Segment>
          <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CharacterInfoDisplay;
