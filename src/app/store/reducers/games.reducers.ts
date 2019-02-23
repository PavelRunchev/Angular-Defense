import { GamesState } from '../state/games.state';
import * as GamesActions from '../actions/games.actions';

const initialState: GamesState = {
  all: [],
  allSearch: [],
  details: null,
  edit: null
};

function getAllGames(state, allGames) {
  return { ...state, all: allGames };
}

function getAllSearchedGames(state, searchedGames) {
  return { ...state, allSearch: searchedGames };
}

function getGameDetails(state, gameDetails) {
  return { ...state, details: gameDetails };
}

function getGameToEdit(state, gameToEdit) {
  return { ...state, edit: gameToEdit };
}

export function gamesReducers(
  state: GamesState = initialState,
  action: GamesActions.Types
) {
  switch (action.type) {
    case GamesActions.GET_ALL_GAMES:
      return getAllGames(state, action.payload);
    case GamesActions.GET_ALL_SEARCHED_GAMES:
      return getAllSearchedGames(state, action.payload);
    case GamesActions.GET_GAME_DETAILS:
      return getGameDetails(state, action.payload);
    case GamesActions.GET_GAME_TO_EDIT:
      return getGameToEdit(state, action.payload);
    default:
      return state;
  }
}

