import { Action } from '@ngrx/store';
import { MyGameModel } from '../../components/games/models/my-game.model';

export const GET_ALL_POSTED_GAMES = '[GAMES] Get All Posted Games';
export const GET_POSTED_DETAILS = '[GAMES] Get Detals Posted Game';

export class GetAllPostedGames implements Action {
  type: string = GET_ALL_POSTED_GAMES;
  constructor(public payload: MyGameModel[]) { }
}

export class GetPostedDetailsGame implements Action {
  type: string = GET_POSTED_DETAILS;
  constructor(public payload: MyGameModel) { }
}

export type Types = GetAllPostedGames | GetPostedDetailsGame;
