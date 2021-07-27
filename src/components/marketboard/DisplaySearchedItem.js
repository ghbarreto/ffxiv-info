import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Item } from 'semantic-ui-react';

import { fetchItemInfo } from '../../actions';
import Spinner from '../Spinner';
import DisplayListings from './DisplayListings';
import './DisplaySearchedItem.css';

const DisplaySearchedItem = ({ item_info, item_information }) => {
  const dispatch = useDispatch();

  const request = () => {
    const response = dispatch(fetchItemInfo(item_info.ID));
    return response;
  };

  useEffect(() => {
    request();
  }, [item_info.ID]);
  if (item_information.gameData.itemInformation) {
    return (
      <div>
        <Item.Group className="marketboard-item">
          <Item>
            <Item.Image
              size="tiny"
              className="marketboard-image"
              src={`https://xivapi.com${item_information.gameData.itemInformation.IconHD}`}
            />
            <Item.Content>
              <Item.Header
                as="h4"
                className="card-content"
                style={{ color: 'white' }}
              >
                {item_information.gameData.itemInformation.Name}
              </Item.Header>
              <Item.Meta style={{ color: 'white' }}>
                {item_information.gameData.itemInformation.Description}
              </Item.Meta>
              <Item.Extra style={{ color: 'white' }}>
                {item_information.gameData.itemInformation.ItemUICategory.Name}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>

        <DisplayListings data={item_information.marketboard.marketboard} />
      </div>
    );
  }
  return <Spinner loading="Fetching Item" />;
};

const mapStateToProps = state => {
  return {
    item_information: state,
  };
};

export default connect(mapStateToProps, { fetchItemInfo })(DisplaySearchedItem);
