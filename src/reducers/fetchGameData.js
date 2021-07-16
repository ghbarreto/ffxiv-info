import { FETCH_DATACENTER } from '../actions/types';

export default function datacenterReducer(state = [], action) {
  switch (action.type) {
    case FETCH_DATACENTER:
      return { ...state, datacenters: action.payload };
    default:
      return state;
  }
}
