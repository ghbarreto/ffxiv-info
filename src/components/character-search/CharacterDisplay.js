import React from 'react';
import { Image, Grid, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CharacterDisplay = props => {
  const { characterDetails } = props.characterDetails;
  console.log(props);
  const display = () => {
    if (characterDetails.fetchCharacters) {
      return characterDetails.fetchCharacters.Results.map(e => {
        return (
          <>
            <Grid.Column>
              <div style={{ marginBottom: '30px' }}></div>
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
          </>
        );
      });
    }
    return null;
  };

  return (
    <Grid columns={6}>
      <Grid.Row>{display()}</Grid.Row>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    characterDetails: state,
  };
};

export default connect(mapStateToProps)(CharacterDisplay);
