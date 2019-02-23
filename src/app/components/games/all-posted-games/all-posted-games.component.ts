import { Component, OnInit } from '@angular/core';
import { MyGameModel } from '../models/my-game.model';
import { GamesService } from '../game.service';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-all-posted-games',
  templateUrl: './all-posted-games.component.html',
  styleUrls: ['./all-posted-games.component.scss']
})
export class AllPostedGamesComponent implements OnInit {
  postedGames$: Observable<MyGameModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;
  loadingGames: boolean = true;

  constructor(
    private gamesService: GamesService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.gamesService
      .postedAllGames()
      .subscribe(() => {
        this.loadingGames = false;
        this.postedGames$ = this.store.pipe(select(state =>
          state
            .postedGames
            .allPostedGames
            .sort((a, b) => Number(b.rank) - Number(a.rank))
        ));
      }
    );
  }

  changePage(page) { this.currentPage = page; }
}
