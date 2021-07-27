import React, { useEffect, useMemo } from 'react';
import { connect, useDispatch } from 'react-redux';
import { items } from '../../../actions';
import './GetCharacterGear.css';

const GetCharacterGear = ({ equip }) => {
  const dispatch = useDispatch();
  const request = () => {
    const response = dispatch(items(equip));
  };

  useEffect(() => {
    request();
  }, []);

  return null;
};
const mapStateToProps = state => {
  return {
    fetchedItems: state.gameData.items,
  };
};

export default connect(mapStateToProps, { items })(GetCharacterGear);
