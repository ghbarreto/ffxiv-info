import { combineReducers } from 'redux';
import fetchCharacterDetails from './fetchCharacterDetails';
import fetchGameData from './fetchGameData';
import fetchMarketBoard from './fetchMarketBoard';
import fetchServerStatus from './fetchServerStatus';

export default combineReducers({
  characterDetails: fetchCharacterDetails,
  gameData: fetchGameData,
  marketboard: fetchMarketBoard,
  server_status: fetchServerStatus,
});
