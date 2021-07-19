import React from 'react';
import GetCharacterGear from './GetCharacterGear';
import { connect, useDispatch } from 'react-redux';

const CharacterGear = ({ gear, fetchedItems }) => {
  console.log(fetchedItems);

  const display = () => {
    return Object.entries(fetchedItems).map(([k, v]) => {
      return (
        <div className="border-items" style={{ margin: '4px' }} key={k}>
          <img className="item-image" src={`https://xivapi.com/${v}`} alt={k} />
          <div class="gear-name">{k}</div>
        </div>
      );
    });
  };
  return (
    <div>
      <div style={{ color: 'white' }}>
        <GetCharacterGear weapon={gear.MainHand.ID || null} />
        <GetCharacterGear head={gear.Head.ID || null} />
        <GetCharacterGear body={gear.Body.ID || null} />
        <GetCharacterGear hands={gear.Hands.ID || null} />
        <GetCharacterGear waist={gear.Waist.ID || null} />
        <GetCharacterGear legs={gear.Legs.ID || null} />
        <GetCharacterGear feet={gear.Feet.ID || null} />
        <GetCharacterGear earrings={gear.Earrings.ID || null} />
        <GetCharacterGear necklace={gear.Necklace.ID || null} />
        <GetCharacterGear bracelets={gear.Bracelets.ID || null} />
        <GetCharacterGear bracelets={gear.Ring1.ID || null} />
        <GetCharacterGear bracelets={gear.Ring2.ID || null} />
        {fetchedItems && display()}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchedItems: state.gameData.items,
  };
};

export default connect(mapStateToProps)(CharacterGear);
