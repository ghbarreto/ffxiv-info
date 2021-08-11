import React from 'react';

import { Grid, Segment } from 'semantic-ui-react';
import './CharacterInfoDisplay.css';

import CharacterPortrait from './character-info/CharacterPortrait';
import CharacterProfile from './character-info/CharacterProfile';
import CharacterClasses from './character-info/CharacterClasses';
import CharacterGear from './character-info/CharacterGear';
import EurekaAndBozjan from '../game-data/EurekaAndBozjan';
import CharacterDetailedInfo from './character-info/CharacterDetailedInfo';
import Spinner from '../Spinner';

const CharacterInfoDisplay = ({ info }) => {
  if (info) {
    const { Character } = info;
    return (
      <Grid columns={3} divided>
        <Grid.Row divided stretched>
          <Grid.Column width={5}>
            <CharacterProfile
              profileName={Character.Name}
              profileFreeCompany={Character.FreeCompanyName}
              freeCompanyID={Character.FreeCompanyId}
              datacenter={Character.DC}
              server={Character.Server}
              profileAvatar={Character.Avatar}
              profileTitle={Character.Title}
              profileTown={Character.Town}
              profileServer={Character.Server}
              activeClass={Character.ActiveClassJob}
            />
            <CharacterPortrait
              portrait={Character.Portrait}
            ></CharacterPortrait>
          </Grid.Column>
          <Grid.Column>
            <Segment style={{height: '5vh'}}>
              <div className="title-character-info left-side">Profile Info</div>
              <CharacterDetailedInfo character={Character} />
            </Segment>
            <Segment style={{ overflow: 'auto', height: '5vh' }}>
              <div className="title-character-info left-side">Classes</div>
              <CharacterClasses classes={Character.ClassJobs} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment style={{ overflow: 'auto', height: '80vh' }}>
              <div className="title-character-info">Gears</div>
              <CharacterGear gear={Character.GearSet.Gear} />
            </Segment>
            <Segment className="eureka-bozjan">
              <div className="title-character-info">Instances</div>
              <EurekaAndBozjan
                bozjan={Character.ClassJobsBozjan}
                eureka={Character.ClassJobsElemental}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  return <Spinner loading="Loading character data" />;
};

export default CharacterInfoDisplay;
