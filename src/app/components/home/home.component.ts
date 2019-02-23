import { Component, OnInit } from '@angular/core';
import { Store, select } from '../../../../node_modules/@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';

import { AppState } from '../../store/app.state';
import { MyGameModel } from './../games/models/my-game.model';
import { GamesService } from '../games/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  highestGame: MyGameModel;
  postedGames: MyGameModel[];
  observablePostedGames: Observable<MyGameModel[]>;
  noRaiting: boolean = false;
  postedDate: string;

  constructor(
    public gameService: GamesService,
    public store: Store<AppState>,
    public authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.checkIfLogged()) {
      this.gameService
      .postedAllGames()
      .subscribe(() => {
        this.observablePostedGames = this.store
          .pipe(select(state => state.postedGames.allPostedGames));

          this.postedGames = this.observablePostedGames['actionsObserver']['_value']['payload'];

          if (this.postedGames.length === 0) {
            this.noRaiting = true;
          } else {
            this.noRaiting = false;
            this.highestGame = this.postedGames.sort((a, b) => Number(b.rank) - Number(a.rank))[0];
            this.postedDate = convertData(this.highestGame['_kmd']['ect']);
          }
      });
    }
  }
}

function convertData(value) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = new Date(value).getUTCDate();
  const month = Number(new Date(value).getUTCMonth() + 1);

  return `${day} ${months[month]}`;
}


