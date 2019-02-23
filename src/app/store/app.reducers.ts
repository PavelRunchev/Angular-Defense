import { postedGamesReducers } from './reducers/postedGames.reducers';
import { gamesReducers } from './reducers/games.reducers';
import { myGamesReducer } from './reducers/myGames.reducers';

export const appReducers = {
  postedGames: postedGamesReducers,
  games: gamesReducers,
  myGames: myGamesReducer
};
