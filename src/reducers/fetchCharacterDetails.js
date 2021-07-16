import { FETCH_CHARACTER } from '../actions/types';

export default function characterReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CHARACTER:
      return { ...state, characterInfo: action.payload };
    default:
      return state;
  }
}
