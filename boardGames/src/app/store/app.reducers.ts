import { gamesReducer } from './reducers/games.reducers';
import { postedGamesReducer } from './reducers/postedGames.reducers';
import { myGamesReducer } from './reducers/myGames.reducers';

export const appReducers = {
    games: gamesReducer,
    postedGames: postedGamesReducer,
    myGames: myGamesReducer
}