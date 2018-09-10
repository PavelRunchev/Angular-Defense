import { Action } from '@ngrx/store';
import { MyGameModel } from '../../components/games/models/my-game.model';


export const GET_ALL_MY_GAMES = '[GAMES] Get All My Games';
export const GET_MY_GAME_DETAIL = '[GAMES] Get My Game Detail';


export class GetAllMyGames implements Action {
    type: string = GET_ALL_MY_GAMES;
    constructor(public payload: MyGameModel[]) { }
}

export class GetMyGameDetail implements Action {
    type: string = GET_MY_GAME_DETAIL;
    constructor(public payload: MyGameModel) { }
}

export type Types = GetAllMyGames | GetMyGameDetail;