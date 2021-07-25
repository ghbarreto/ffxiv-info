import marketboard from '../apis/marketboard';
import { FETCH_MARKETBOARD_DATA } from './types';

export const marketboard_item =
  (item = '', server, database) =>
  async dispatch => {
    let response = [];

    if (server === 'null') {
      response = await marketboard.get(`/${database}/${item}`);
    }
    if (database === 'null') {
      response = await marketboard.get(`/${server}/${item}`);
    }
    if (database !== 'null' && server !== 'null') {
      response = await marketboard.get(`/${server}/${item}`);
    }

    dispatch({ type: FETCH_MARKETBOARD_DATA, payload: response });
  };
