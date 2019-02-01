
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GameModel } from './models/game.model';
import { MyGameModel } from './models/my-game.model';

import { AppState } from '../../store/app.state';
import { Store } from '../../../../node_modules/@ngrx/store';
import { map } from 'rxjs/operators';

import { GetAllPostedGames, GetPostedDetailsGame } from '../../store/actions/postedGames.actions';

const appKey = 'kid_SJkb3YSIQ';

const createGameUrl = `https://baas.kinvey.com/appdata/${appKey}/games`;
const allGamesUrl = `https://baas.kinvey.com/appdata/${appKey}/games?query={}&sort={"_kmd.ect": -1}`;
const detailsGameUrl = `https://baas.kinvey.com/appdata/${appKey}/games/`;
const editGameUrl = `https://baas.kinvey.com/appdata/${appKey}/games/`;
const gameById = `https://baas.kinvey.com/appdata/${appKey}/games/`;

const createMyGameUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore`;
const myDetailsGameUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore/`;
const postedAllGamesUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore?query={"isPost":true}&sort={"rank": -1}`;
const postGameUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore/`;

@Injectable()
export class GameService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }




    postedAllGames() {
      return this.http.get<MyGameModel[]>(postedAllGamesUrl,
        {
            headers: this.createAuthHeader()
        }
    ).pipe(map((res) => {
        const items = Object.keys(res);
        const myGames: MyGameModel[] = [];

        for (const i of items) {
            myGames.push(res[i]);
        }

        this.store.dispatch(new GetAllPostedGames(myGames));
    }));
    }

    postedGameDetal(id: string) {
      return this.http.get<MyGameModel>(myDetailsGameUrl + id,
          {
              headers: this.createAuthHeader()
          }
      ).pipe(map((myGame: MyGameModel) => {
          this.store.dispatch(new GetPostedDetailsGame(myGame));
      }));
  }

  createAuthHeader() {
    return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
    });
  }
}
