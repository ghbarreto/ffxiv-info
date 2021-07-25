import React from 'react';
import { Image, Item } from 'semantic-ui-react';

const DisplaySearchedItem = ({ item_info, searched_item }) => {
  const icon = `https://xivapi.com${item_info.Icon}`;
  console.log(searched_item);
  console.log(item_info);
  return (
    <Item.Group style={{ backgroundColor: 'grey' }}>
      <Item>
        <Item.Image size="tiny" src={icon} />

        <Item.Content>
          <Item.Header as="a">{item_info.Name}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default DisplaySearchedItem;
