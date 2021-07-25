import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { marketboard_item } from '../../actions';
import DisplaySearchedItem from './DisplaySearchedItem';

const MarketBoardFetchItems = ({ match, fetched_Item }) => {
  const dispatch = useDispatch();
  const id = match.params.id;
  const server = match.params.server;
  const database = match.params.database;
  const searched_item = fetched_Item.marketboard.marketboard;
  const list_of_items = fetched_Item.gameData.marketable_items;

  const return_items = () => {
    if (searched_item) {
      if (list_of_items) {
        return list_of_items.Results.map(e => {
          if (searched_item.data.itemID === e.ID) {
            return (
              <DisplaySearchedItem
                item_info={e}
                searched_item={searched_item}
              />
            );
          }
        });
      }
    }
  };

  const request = () => {
    const response = dispatch(marketboard_item(id, server, database));
    return response;
  };

  useEffect(() => {
    request();
  }, [id, server, database]);

  return <div>{return_items()}</div>;
};

const mapStateToProps = state => {
  return {
    fetched_Item: state,
  };
};

export default connect(mapStateToProps, { marketboard_item })(
  MarketBoardFetchItems
);
