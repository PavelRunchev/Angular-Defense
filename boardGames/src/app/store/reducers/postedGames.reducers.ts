import { PostedGamesState } from '../state/postedGames';
import * as PostedGamesActions from '../actions/postGames.actions';

const initialState: PostedGamesState = {
    allPosted: [],
    postedDetail: null,
}

function getAllPostedGames(state, allPostedGames) {
    return { ...state, allPosted: allPostedGames }
}

function getPostedGameDetail(state, postGame) {
    return { ...state, postedDetail: postGame}
}


export function postedGamesReducer(
    state: PostedGamesState = initialState,
    action: PostedGamesActions.Types
) {
    switch(action.type) {
        case PostedGamesActions.GET_ALL_POSTED_GAMES:
            return getAllPostedGames(state, action.payload);
        case PostedGamesActions.GET_POSTED_DETAIL:
            return getPostedGameDetail(state, action.payload);
        default:
            return state;
    }
}