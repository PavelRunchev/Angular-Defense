import { GamesState } from '../state/games.state';
import * as GamesActions from '../actions/games.actions';

const initialState: GamesState = {
    all: [],
    allSearch: [],
    detail: null,
    toEdit: null,
}

function getAllGames(state, allGames) {
    return { ...state, all: allGames }
}

function getGameDetail(state, gameDetail) {
    return { ...state, detail: gameDetail }
}

function getAllSearchedGames(state, Search) {
    return { ...state, allSearch: Search }
}

function getGameToEdit(state, gameToedit) {
    return { ...state, toEdit: gameToedit }
}


export function gamesReducer(
    state: GamesState = initialState,
    action: GamesActions.Types
) {
    switch(action.type) {
        case GamesActions.GET_ALL_GAMES:
            return getAllGames(state, action.payload);
        case GamesActions.GET_GAME_DETAIL:
            return getGameDetail(state, action.payload);
        case GamesActions.GET_ALL_SEARCHED_GAMES:
            return getAllSearchedGames(state, action.payload);
        case GamesActions.GET_GAME_TO_EDIT:
            return getGameToEdit(state, action.payload);
        default:
            return state;
    }
}