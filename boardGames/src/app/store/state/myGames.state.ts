import { MyGameModel } from '../../components/games/models/my-game.model';

export interface MyGamesState {
    allMyGames: MyGameModel[],
    myGameDetail: MyGameModel,
}