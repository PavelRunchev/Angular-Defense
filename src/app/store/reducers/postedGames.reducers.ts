import { PostedGamesState } from '../state/postedGames.state';
import * as PostedGamesActions from '../actions/postedGames.actions';

const initialState: PostedGamesState = {
  allPostedGames: [],
  detailsPostedGame:  null,
  editPostedGame: null
};

function getAllPostedGames(state, allPostedGames) {
  return { ...state, allPostedGames: allPostedGames };
}

function getPostedDetailsGame(state, postGame) {
  return { ...state, detailsPostedGame: postGame };
}

function getPostedEditGame(state, gameEdit) {
  return { ...state, editPostedGame: gameEdit };
}

export function postedGamesReducers(
  state: PostedGamesState = initialState,
  action: PostedGamesActions.Types
) {
  switch (action.type) {
    case PostedGamesActions.GET_ALL_POSTED_GAMES:
      return getAllPostedGames(state, action.payload);
    case PostedGamesActions.GET_DETAILS_POSTED_GAME:
      return getPostedDetailsGame(state, action.payload);
    case PostedGamesActions.GET_EDIT_POSTED_GAME:
      return getPostedEditGame(state, action.payload);
    default:
      return state;
  }
}
