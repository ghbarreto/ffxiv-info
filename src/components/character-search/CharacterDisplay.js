import React from 'react';
import { Image, Grid, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CharacterDisplay = ({ character }) => {
  const display = () => {
    return character.map(e => {
      return (
        <Grid.Column>
          <Card>
            <Image src={e.Avatar} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{e.Name}</Card.Header>
              <Card.Meta>
                <span className="date">{e.Server}</span>
              </Card.Meta>
              <Card.Description>
                <Link to={`/characters/${e.ID}`}>
                  <Button fluid content="Primary">
                    More
                  </Button>
                </Link>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });
  };

  return (
    <Grid columns={6} divided>
      <Grid.Row>{display()}</Grid.Row>
    </Grid>
  );
};

export default CharacterDisplay;
