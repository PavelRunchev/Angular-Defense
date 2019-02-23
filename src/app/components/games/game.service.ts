import { CreateMyGameModel } from './models/create-my-game.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GameModel } from './models/game.model';
import { CreateGameModel } from './models/create-game.model';
import { MyGameModel } from './models/my-game.model';

import { AppState } from '../../store/app.state';
import { Store } from '../../../../node_modules/@ngrx/store';
import { map } from 'rxjs/operators';

import { AuthService } from '../../authentication/auth.service';

import { GetAllGames, GetAllSearchedGames, GetGameDetails, GetGameToEdit } from '../../store/actions/games.actions';
import { GetAllPostedGames, GetDetailsPostedGame, GetEditPostedGame } from '../../store/actions/postedGames.actions';
import { GetAllMyGames, GetMyGameDetails } from '../../store/actions/myGames.actions';

const appKey = 'kid_SJkb3YSIQ';

const createGameUrl = `https://baas.kinvey.com/appdata/${appKey}/games`;
const allGamesUrl = `https://baas.kinvey.com/appdata/${appKey}/games?query={}&sort={"_kmd.ect": -1}`;
const detailsGameUrl = `https://baas.kinvey.com/appdata/${appKey}/games/`;
const editGameUrl = `https://baas.kinvey.com/appdata/${appKey}/games/`;
const gameById = `https://baas.kinvey.com/appdata/${appKey}/games/`;

const createMyGameUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore`;
const myDetailsGameUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore/`;
const postedAllGamesUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore?query={"isPost":true}&sort={"rank": -1}`;
const postGameByIdUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore/`;

@Injectable()
export class GamesService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private authService: AuthService
  ) { }

  getToken() {
    return this.authService.getToken || localStorage.getItem('authtoken');
  }

  // CREATE GAME
  createGame(body: CreateGameModel) {
    return this.http.post(createGameUrl, JSON.stringify(body),
    {
      headers: this.createAuthHeader()
    });
  }

  // GET ALL GAMES
  getAllGames() {
    return this.http.get<GameModel[]>(allGamesUrl, { headers: this.createAuthHeader() })
      .pipe(map((res) => {
        const items = Object.keys(res);
        const games: GameModel[] = [];

        for (const i of items) {
          games.push(res[i]);
        }

        this.store.dispatch(new GetAllGames(games));
      }));
  }

  // GET ALL SEARCHED GAMES
  getAllSearchedGames(value: string) {
    const searchGameUrl = `https://baas.kinvey.com/appdata/${appKey}/games?query={"title":"${value}"}&sort={"_kmd.ect": -1}`;
    return this.http.get<GameModel[]>(searchGameUrl, { headers: this.createAuthHeader() })
      .pipe(map((res) => {
        const items = Object.keys(res);
        const games: GameModel[] = [];

        for (const i of items) {
          games.push(res[i]);
        }

        this.store.dispatch(new GetAllSearchedGames(games));
      }));
  }

  // GET DETAILS GAME
  detailsGame(id: string) {
    return this.http.get<GameModel>(detailsGameUrl + id, { headers: this.createAuthHeader() } )
      .pipe(map((game: GameModel) => {
        this.store.dispatch(new GetGameDetails(game));
      }));
  }

  // GET TO EDIT BY ID
  getToEditById(id: string) {
    return this.http.get<GameModel>(detailsGameUrl + id,
      { headers: this.createAuthHeader() })
      .pipe(map((game: GameModel) => {
        this.store.dispatch(new GetGameToEdit(game));
      }));
  }

  // EDIT GAME
  editGame(id: string, body: GameModel) {
    return this.http.put<GameModel>(editGameUrl + id, JSON.stringify(body),
      { headers: this.createAuthHeader() }
    );
  }

  // DELETE GAME
  removeGame(id: string) {
    return this.http.delete<GameModel>(gameById + id, { headers: this.createAuthHeader() });
  }

  // CREATE MY GAME
  createMyGame(body: CreateMyGameModel) {
    return this.http.post(createMyGameUrl, body,
      { headers: this.createAuthHeader() } );
  }

  // GET ALL MY GAMES
  getMyGames() {
    const user = localStorage.getItem('username');
    const myGamesUrl = `https://baas.kinvey.com/appdata/${appKey}/myGamesStore?query={"taker":"${user}"}&sort={"_kmd.ect": -1}`;
    return this.http.get<MyGameModel[]>(myGamesUrl,
      { headers: this.createAuthHeader() })
      .pipe(map((res) => {
        const items = Object.keys(res);
        const myGames: MyGameModel[] = [];

        for (const i of items) {
          myGames.push(res[i]);
        }

        this.store.dispatch(new GetAllMyGames(myGames));
      }));
  }

  // GET MY GAME DETAILS
  detailsMyGame(id: string) {
    return this.http.get<MyGameModel>(myDetailsGameUrl + id,
      { headers: this.createAuthHeader() } )
      .pipe(map((myGame: MyGameModel) => {
        this.store.dispatch(new GetMyGameDetails(myGame));
      }));
  }

  // REMOVE MY GAME
  deleteMyGame(id: string) {
    return this.http.delete<MyGameModel>(myDetailsGameUrl + id,
      { headers: this.createAuthHeader() } );
  }

  // POST GAME TO RAITING SECTION
  postGame(id: string, body: MyGameModel) {
    return this.http.put<MyGameModel>(postGameByIdUrl + id, body,
      { headers: this.createAuthHeader() }
    );
  }

  // GET ALL POSTED GAMES
  postedAllGames() {
    return this.http.get<MyGameModel[]>(postedAllGamesUrl,
      { headers: this.createAuthHeader() })
      .pipe(map((res) => {
      const items = Object.keys(res);
      const myGames: MyGameModel[] = [];

      for (const i of items) {
        myGames.push(res[i]);
      }

      this.store.dispatch(new GetAllPostedGames(myGames));
    }));
  }

  // GET POSTED GAME DETAILS
  detailsPostedGame(id: string) {
    return this.http.get<MyGameModel>(postGameByIdUrl + id,
      { headers: this.createAuthHeader() })
      .pipe(map((myGame: MyGameModel) => {
      this.store.dispatch(new GetDetailsPostedGame(myGame));
    }));
  }

  // GET TO EDIT POSTED GAME
  postGameById(id: string) {
    return this.http.get<MyGameModel>(postGameByIdUrl + id,
      { headers: this.createAuthHeader() })
      .pipe(map((myGame: MyGameModel) => {
      this.store.dispatch(new GetEditPostedGame(myGame));
    }));
  }

  // GET POSTED GAME EDIT
  editPostGame(id: string, body: MyGameModel) {
    return this.http.put<MyGameModel>(postGameByIdUrl + id, JSON.stringify(body),
      { headers: this.createAuthHeader() }
    );
  }

  createAuthHeader() {
    return new HttpHeaders({
        'Authorization': `Kinvey ${this.getToken()}`,
        'Content-Type': 'application/json'
    });
  }
}
