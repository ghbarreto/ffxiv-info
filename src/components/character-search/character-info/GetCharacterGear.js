import React, { useEffect, useMemo } from 'react';
import { connect, useDispatch } from 'react-redux';
import { items } from '../../../actions';
import './GetCharacterGear.css';

const GetCharacterGear = ({ item, fetchedItems }) => {
  const dispatch = useDispatch();

  const request = () => {
    const response = dispatch(items(item));
  };

  useEffect(() => {
    request();
  }, []);
  console.log('a');

  if (fetchedItems) {
    return Object.entries(fetchedItems).map(([k, v]) => {
      return (
        <div className="border-items" key={k}>
          <img className="item-image" src={`https://xivapi.com/${v}`} alt={k} />
          <div class="gear-name">{k}</div>
        </div>
      );
    });
  }

  return 'Loading';
};

const mapStateToProps = state => {
  return {
    fetchedItems: state.gameData.items,
  };
};

export default connect(mapStateToProps, { items })(GetCharacterGear);
