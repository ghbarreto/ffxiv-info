import ffxiv from '../apis/ffxiv';
import { FETCH_CHARACTER, FETCH_INFO } from './types';

// Character Data
export const fetchCharacter = (name, server) => async dispatch => {

  if (!name) return null

  const response = await ffxiv.get(
    `/character/search?name=${name}&server=${server}`
  );

  dispatch({ type: FETCH_CHARACTER, payload: response.data });
};

//? fetch character information
export const fetchCharacterInfo = id => async dispatch => {
  const response = await ffxiv.get(`/character/${id}`);

  dispatch({ type: FETCH_INFO, payload: response.data });
};
