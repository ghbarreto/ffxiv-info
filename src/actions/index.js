import ffxiv from '../apis/ffxiv';
import {
  FETCH_CHARACTER,
  FETCH_INFO,
  FETCH_DATACENTER,
  FETCH_TITLE,
} from './types';

// Character Data
export const fetchCharacter = (name, server) => async dispatch => {
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

// Game Data
export const fetchDatacenter = () => async dispatch => {
  const response = await ffxiv.get(`/servers/dc`);

  dispatch({ type: FETCH_DATACENTER, payload: response.data });
};

export const fetchTitle = title => async dispatch => {
  const response = await ffxiv.get(`/title/${title}`);

  dispatch({ type: FETCH_TITLE, payload: response.data });
};
