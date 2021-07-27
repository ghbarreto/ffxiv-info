import React from 'react';
import GetCharacterGear from './GetCharacterGear';
import { connect } from 'react-redux';

const CharacterGear = ({ gear, fetchedItems }) => {
  const display = () => {
    return Object.entries(fetchedItems).map(([k, v]) => {
      return (
        <div className="border-items" style={{ margin: '4px' }} key={k}>
          <img className="item-image" src={`https://xivapi.com/${v}`} alt={k} />
          <div className="gear-name">{k}</div>
        </div>
      );
    });
  };

  const getItems = () => {
    return Object.keys(gear).map(equip => {
      return Object.values(gear).map(id => {
        return <GetCharacterGear equip={id.ID} />;
      });
    });
  };

  return (
    <div>
      <div style={{ color: 'rgb(241, 182, 18)' }}>
        {getItems()}
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
