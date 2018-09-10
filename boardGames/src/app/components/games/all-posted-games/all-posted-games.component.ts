import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { MyGameModel } from './../models/my-game.model';
import { GameService } from './../game.survice';

import { Observable } from 'rxjs';
import { Store, select } from '../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-all-posted-games',
  templateUrl: './all-posted-games.component.html',
  styleUrls: ['./all-posted-games.component.css']
})
export class AllPostedGamesComponent implements OnInit {
  postedGames$: Observable<MyGameModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private authService: AuthService,
    private gameService: GameService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.gameService
      .postedAllGames()
      .subscribe(() => {
        this.postedGames$ = this.store
        .pipe(select(state => 
            state
              .postedGames
              .allPosted
              .sort((a, b) => Number(b.rank) - Number(a.rank))));
    });
  }

  changePage(page) {
    this.currentPage = page;
  }
}
