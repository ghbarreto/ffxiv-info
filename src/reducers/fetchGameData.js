import { FETCH_DATACENTER, FETCH_TITLE } from '../actions/types';

export default function datacenterReducer(state = [], action) {
  switch (action.type) {
    case FETCH_DATACENTER:
      return { ...state, datacenters: action.payload };
    case FETCH_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
}
