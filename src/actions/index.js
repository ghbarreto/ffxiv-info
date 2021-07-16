import ffxiv from '../apis/ffxiv';
import { FETCH_CHARACTER, FETCH_DATACENTER } from './types';

// Character Data
export const fetchCharacter = name => async dispatch => {
  const response = await ffxiv.get(`/character/search?name=${name}`);

  return dispatch({ type: FETCH_CHARACTER, payload: response.data });
};

// Game Data
export const fetchDatacenter = () => async dispatch => {
  const response = await ffxiv.get(`/servers/dc`);

  dispatch({ type: FETCH_DATACENTER, payload: response.data });
};
