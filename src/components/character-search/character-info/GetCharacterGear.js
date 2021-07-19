import React, { useEffect, useMemo } from 'react';
import { connect, useDispatch } from 'react-redux';
import { items } from '../../../actions';
import './GetCharacterGear.css';

const GetCharacterGear = ({
  weapon,
  head,
  body,
  hands,
  legs,
  waist,
  feet,
  earrings,
  necklace,
  bracelets,
}) => {
  const dispatch = useDispatch();

  const request = () => {
    const response = dispatch(
      items(
        weapon ||
          head ||
          body ||
          hands ||
          legs ||
          waist ||
          feet ||
          earrings ||
          necklace ||
          bracelets
      )
    );
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
