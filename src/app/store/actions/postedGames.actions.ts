import { Action } from '@ngrx/store';
import { MyGameModel } from '../../components/games/models/my-game.model';

export const GET_ALL_POSTED_GAMES = '[GAMES] Get All Posted Games';
export const GET_DETAILS_POSTED_GAME = '[GAMES] Get Details Posted Game';
export const GET_EDIT_POSTED_GAME = '[GAMES] Get Edit Posted Game';

export class GetAllPostedGames implements Action {
  type: string = GET_ALL_POSTED_GAMES;
  constructor(public payload: MyGameModel[]) { }
}

export class GetDetailsPostedGame implements Action {
  type: string = GET_DETAILS_POSTED_GAME;
  constructor(public payload: MyGameModel) { }
}

export class GetEditPostedGame implements Action {
  type: string = GET_EDIT_POSTED_GAME;
  constructor(public payload: MyGameModel) { }
}

export type Types = GetAllPostedGames | GetDetailsPostedGame | GetEditPostedGame;
