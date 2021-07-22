import {
  FETCH_DATACENTER,
  FETCH_TITLE,
  FETCH_ITEMS,
  FETCH_MARKETABLE_ITEMS,
} from '../actions/types';

export default function datacenterReducer(state = [], action) {
  switch (action.type) {
    case FETCH_DATACENTER:
      return { ...state, datacenters: action.payload };
    case FETCH_TITLE:
      return { ...state, title: action.payload };
    case FETCH_ITEMS:
      const { Name, IconHD } = action.payload;
      return { ...state, items: { ...state.items, [Name]: IconHD } };
    case FETCH_MARKETABLE_ITEMS:
      return { ...state, marketable_items: action.payload };
    default:
      return state;
  }
}
