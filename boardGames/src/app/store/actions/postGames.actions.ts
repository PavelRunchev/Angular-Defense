import { Action } from '@ngrx/store';
import { MyGameModel } from '../../components/games/models/my-game.model';


export const GET_ALL_POSTED_GAMES = '[GAMES] Get All Posted Games';
export const GET_POSTED_DETAIL = '[GAMES] Get Detail Posted Game';


export class GetAllPostedGames implements Action {
    type: string = GET_ALL_POSTED_GAMES;
    constructor(public payload: MyGameModel[]) { }
}

export class GetPostedeDetail implements Action {
    type: string = GET_POSTED_DETAIL;
    constructor(public payload: MyGameModel) { }
}

export type Types = GetAllPostedGames | GetPostedeDetail;