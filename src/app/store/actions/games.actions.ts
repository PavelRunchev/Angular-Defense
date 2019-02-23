
import { Action } from '@ngrx/store';
import { GameModel } from '../../components/games/models/game.model';

export const GET_ALL_GAMES = '[GAMES] Get All';
export const GET_ALL_SEARCHED_GAMES = '[GAMES] Get Search';
export const GET_GAME_DETAILS = '[GAMES] Get Details';
export const GET_GAME_TO_EDIT = '[GAMES] Get Game to Edit';

export class GetAllGames implements Action {
  type: string = GET_ALL_GAMES;
  constructor(public payload: GameModel[]) { }
}

export class GetAllSearchedGames implements Action {
  type: string = GET_ALL_SEARCHED_GAMES;
  constructor(public payload: GameModel[]) { }
}

export class GetGameDetails implements Action {
  type: string = GET_GAME_DETAILS;
  constructor(public payload: GameModel) { }
}

export class GetGameToEdit implements Action {
  type: string = GET_GAME_TO_EDIT;
  constructor(public payload: GameModel) { }
}

export type Types = GetAllGames | GetAllSearchedGames | GetGameDetails | GetGameToEdit;
