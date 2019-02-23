import { MyGameModel } from '../../components/games/models/my-game.model';

export interface PostedGamesState {
  allPostedGames: MyGameModel[];
  detailsPostedGame: MyGameModel;
  editPostedGame: MyGameModel;
}
