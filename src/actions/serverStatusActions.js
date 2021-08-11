import server_status from '../apis/server';
import { SERVER_STATUS } from './types';

export const fetchServerStatus = () => async dispatch => {
  const response = await server_status.get(`/servers`);

  dispatch({ type: SERVER_STATUS, payload: response.data });
};
