import ffxiv from '../apis/ffxiv';
import {
  FETCH_DATACENTER,
  FETCH_TITLE,
  FETCH_ITEMS,
  FETCH_MARKETABLE_ITEMS,
} from './types';

export const fetchDatacenter = () => async dispatch => {
  const response = await ffxiv.get(`/servers/dc`);

  dispatch({ type: FETCH_DATACENTER, payload: response.data });
};

export const fetchTitle = title => async dispatch => {
  const response = await ffxiv.get(`/title/${title}`);

  dispatch({ type: FETCH_TITLE, payload: response.data });
};

export const items = item => async dispatch => {
  const response = await ffxiv.get(`/item/${item}`);

  dispatch({ type: FETCH_ITEMS, payload: response.data });
};

export const fetch_marketable_items = item => async dispatch => {
  const response = await ffxiv.get(
    `/search?filters=IsUntradable=0&string=${item}&indexes=item`
  );

  dispatch({ type: FETCH_MARKETABLE_ITEMS, payload: response.data });
};