import { PostedGamesState} from './state/postedGames.state';
import { GamesState } from './state/games.state';
import { MyGamesState } from './state/myGames.state';

export interface AppState {
  games: GamesState;
  myGames: MyGamesState;
  postedGames: PostedGamesState;
}
