import { GamesState } from './state/games.state';
import { PostedGamesState } from './state/postedGames';
import { MyGamesState } from './state/myGames.state';

export interface AppState {
    games: GamesState
    postedGames: PostedGamesState,
    myGames: MyGamesState
}