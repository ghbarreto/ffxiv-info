import ffxiv from '../apis/ffxiv';
import {
  FETCH_DATACENTER,
  FETCH_TITLE,
  FETCH_ITEMS,
  FETCH_MARKETABLE_ITEMS,
  FETCH_ITEM_INFO,
  RESET_GEAR_ACTION,
  FETCH_FREE_COMPANY,
  FETCH_FREE_COMPANY_INFO,
  FETCH_GRAND_COMPANY_NAME,
  FETCH_GRAND_COMPANY_RANK,
  FETCH_GRAND_COMPANY_RANK_NAME,
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

export const fetchItemInfo = item => async dispatch => {
  const response = await ffxiv.get(`/item/${item}`);

  dispatch({ type: FETCH_ITEM_INFO, payload: response.data });
};

export const fetch_marketable_items = item => async dispatch => {
  const response = await ffxiv.get(
    `/search?filters=IsUntradable=0&string=${item}&indexes=item`
  );

  dispatch({ type: FETCH_MARKETABLE_ITEMS, payload: response.data });
};

export const fetch_free_company = (name, server) => async dispatch => {
  const response = await ffxiv.get(
    `/freecompany/search?name=${name}&server=${server}`
  );

  dispatch({ type: FETCH_FREE_COMPANY, payload: response.data });
};

export const fetch_free_company_info = id => async dispatch => {
  const response = await ffxiv.get(`/freecompany/${id}?data=FCM`);

  dispatch({ type: FETCH_FREE_COMPANY_INFO, payload: response.data });
};

export const fetch_grand_company_name = () => async dispatch => {
  const response = await ffxiv.get(`/GrandCompany`);

  dispatch({ type: FETCH_GRAND_COMPANY_NAME, payload: response.data });
};

export const fetch_grand_company_rank = id => async dispatch => {
  const response = await ffxiv.get(`/GrandCompanyRank/${id}`);

  dispatch({ type: FETCH_GRAND_COMPANY_RANK, payload: response.data });
};

export const fetch_grand_company_rank_name = url => async dispatch => {
  const response = await ffxiv.get(`${url}`);

  dispatch({ type: FETCH_GRAND_COMPANY_RANK_NAME, payload: response.data });
};

export const reset_gear_action = () => async dispatch => {
  dispatch({ type: RESET_GEAR_ACTION, payload: [] });
};
