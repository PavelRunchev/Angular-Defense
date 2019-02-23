import { MyGamesState } from '../state/myGames.state';
import * as MyGamesActions from '../actions/myGames.actions';

const initialState: MyGamesState = {
    allMyGames: [],
    detailsMyGame: null
};

function getAllMyGames(state, allMyGames) {
    return { ...state, allMyGames: allMyGames };
}

function getMyGameDetail(state, myGame) {
    return { ...state, detailsMyGame: myGame};
}

export function myGamesReducer(
    state: MyGamesState = initialState,
    action: MyGamesActions.Types
) {
    switch (action.type) {
        case MyGamesActions.GET_ALL_MY_GAMES:
            return getAllMyGames(state, action.payload);
        case MyGamesActions.GET_MY_GAME_DETAILS:
            return getMyGameDetail(state, action.payload);
        default:
            return state;
    }
}
