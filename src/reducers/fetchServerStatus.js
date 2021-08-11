import { SERVER_STATUS } from '../actions/types';

export default function serverStatusReducer(state = [], action) {
  switch (action.type) {
    case SERVER_STATUS:
      return { ...state, server_status: action.payload };
    default:
      return state;
  }
}
