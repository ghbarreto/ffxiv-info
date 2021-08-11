import {
  FETCH_DATACENTER,
  FETCH_TITLE,
  FETCH_ITEMS,
  FETCH_MARKETABLE_ITEMS,
  FETCH_ITEM_INFO,
  RESET_GEAR_ACTION,
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
    case FETCH_ITEM_INFO:
      return { ...state, itemInformation: action.payload };
    case RESET_GEAR_ACTION:
      // console.log("dasdasd", state)
      return {
        state: []
        // title: (state.title = []),
        // itemInformation: (state.itemInformation = []),
        // items: (state.items = []),
      };
    default:
      return state;
  }
}
