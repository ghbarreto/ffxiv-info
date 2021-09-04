import React, { useEffect } from 'react';
import { Image, Grid, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { reset_gear_action } from '../../actions';

const CharacterDisplay = props => {
  const { characterDetails } = props.characterDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(reset_gear_action());
  }, []);

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
                        Details
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
