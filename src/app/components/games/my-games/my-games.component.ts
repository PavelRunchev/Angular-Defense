import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { EmbedVideoService } from 'ngx-embed-video';

import { MyGameModel } from './../models/my-game.model';
import { GamesService } from '../game.service';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {
  myGames: MyGameModel[];
  noAddMyGames: boolean;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private gameService: GamesService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.gameService.getMyGames().subscribe(() => {
      this.myGames = this.store.pipe(select(state =>
        // get data from Observable
        state.myGames.allMyGames))['actionsObserver']['_value']['payload'];
        this.noAddMyGames = this.myGames.length === 0 ? true : false;
    });
  }
}
