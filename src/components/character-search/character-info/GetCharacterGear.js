import React, { useEffect, useMemo } from 'react';
import { connect, useDispatch } from 'react-redux';
import { items, reset_gear_action } from '../../../actions';
import { bindActionCreators } from 'redux';
import './GetCharacterGear.css';

const GetCharacterGear = ({ equip, fetchedItems }) => {
  const dispatch = useDispatch();
  const request = () => {
    const response = dispatch(items(equip));
  };
  console.log(fetchedItems, "test");
  useEffect(() => {
    request();
    return dispatch(reset_gear_action());
  }, [equip]);

  return null;
};
const mapStateToProps = state => {
  return {
    fetchedItems: state.gameData.items,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      items,
      reset_gear_action,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetCharacterGear);
