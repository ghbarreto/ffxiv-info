import { FETCH_CHARACTER, FETCH_INFO } from '../actions/types';

export default function characterReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CHARACTER:
      return { ...state, fetch: action.payload };
    case FETCH_INFO:
      return { ...state, fetchCharacterInfo: action.payload };
    default:
      return state;
  }
}
