import { combineReducers } from 'redux';
import fetchCharacterDetails from './fetchCharacterDetails';
import fetchGameData from './fetchGameData';
import fetchMarketBoard from './fetchMarketBoard';

export default combineReducers({
  characterDetails: fetchCharacterDetails,
  gameData: fetchGameData,
  marketboard: fetchMarketBoard,
});
