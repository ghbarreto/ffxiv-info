import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { items, reset_gear_action } from '../../../actions';
import { bindActionCreators } from 'redux';
import './GetCharacterGear.css';

const GetCharacterGear = ({ equip }) => {
  const dispatch = useDispatch();
  const request = () => {
    Object.values(equip).map(gear => {
      setTimeout(() => dispatch(items(gear.ID)), 200);
    });
    // const response = dispatch(items(equip));
  };
  useEffect(() => {
    request();
    return dispatch(reset_gear_action());
  }, []);

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
