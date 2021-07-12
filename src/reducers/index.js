import { combineReducers } from "redux";
import fetchCharacterDetails from "./fetchCharacterDetails";
import fetchGameData from './fetchGameData';

export default combineReducers({
  characterDetails: fetchCharacterDetails,
  gameData: fetchGameData
});