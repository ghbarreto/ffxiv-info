import marketboard from '../apis/marketboard';
import { FETCH_MARKETBOARD_DATA } from './types';

export const items = (item, database, server) => async dispatch => {
  const response = await marketboard.get(`/${database || server}/${item}`);

  dispatch({ type: FETCH_MARKETBOARD_DATA, payload: response.data });
};
