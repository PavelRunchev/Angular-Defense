import { MyGameModel } from '../../components/games/models/my-game.model';

export interface PostedGamesState {
  allPosted: MyGameModel[];
  postedDetails: MyGameModel;
}
