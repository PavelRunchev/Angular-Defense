import { PostedGamesState } from '../state/postedGames.state';
import * as PostedGamesActions from '../actions/postedGames.actions';

const initialState: PostedGamesState = {
  allPosted: [],
  postedDetails:  null,
};

function getAllPostedGames(state, allPostedGames) {
  return { ...state, allPosted: allPostedGames };
}

function getPostedDetailsGame(state, postGame) {
  return { ...state, PostedDetails: postGame };
}

export function postedGamesReducer(
  state: PostedGamesState = initialState,
  action: PostedGamesActions.Types
) {
  switch (action.type) {
    case PostedGamesActions.GET_ALL_POSTED_GAMES:
      return getAllPostedGames(state, action.payload);
    case PostedGamesActions.GET_POSTED_DETAILS:
      return getPostedDetailsGame(state, action.payload);
    default:
      return state;
  }
}
