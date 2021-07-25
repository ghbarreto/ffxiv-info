import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Item } from 'semantic-ui-react';

import { fetchItemInfo } from '../../actions';
import Spinner from '../Spinner';
import DisplayListings from './DisplayListings';

const DisplaySearchedItem = ({
  item_info,
  searched_item,
  item_information,
}) => {
  const dispatch = useDispatch();

  const request = () => {
    const response = dispatch(fetchItemInfo(item_info.ID));
    return response;
  };

  useEffect(() => {
    request();
  }, [item_info.ID]);
  console.log(item_information);
  if (item_information.gameData.itemInformation) {
    return (
      <div>
        <Item.Group
          style={{
            backgroundColor: 'lightgrey',
          }}
        >
          <Item>
            <Item.Image
              size="tiny"
              src={`https://xivapi.com${item_information.gameData.itemInformation.IconHD}`}
            />
            <Item.Content>
              <Item.Header as="a">
                {item_information.gameData.itemInformation.Name}
              </Item.Header>
              <Item.Meta>
                {item_information.gameData.itemInformation.Description}
              </Item.Meta>
              <Item.Extra>
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
