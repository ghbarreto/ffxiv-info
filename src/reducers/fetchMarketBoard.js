import { FETCH_MARKETBOARD_DATA } from '../actions/types';

export default function marketboardReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MARKETBOARD_DATA:
      return { ...state, marketboard: action.payload };
    default:
      return state;
  }
}
