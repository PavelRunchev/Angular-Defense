import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { GamesService } from '../game.service';
import { GameModel } from '../models/game.model';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {
  games$: Observable<GameModel[]>;
  pageSize: number = 5;
  currentPage: number = 1;
  noSearchedResult: boolean = false;
  noLoadingGames = true;

  formSearch = new FormGroup({
    'search': new FormControl('',
    [ Validators.required, Validators.minLength(3),
      Validators.pattern('^[A-Z][A-Za-z0-9 ]+$')])
  });

  constructor(
    private gamesService: GamesService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.gamesService
      .getAllGames()
      .subscribe(() => {
      this.noLoadingGames = false;
      this.games$ = this.store.pipe(select(state => state.games.all));
    });
  }

  changePage(page) {
    this.currentPage = page;
  }

  search() {
    const value = this.formSearch.value['search'];

    this.gamesService
      .getAllSearchedGames(value)
      .subscribe(() => {

        if (this.store.source['value'].games.allSearch.length === 0) {
          this.noSearchedResult = true;
        } else {
          this.noSearchedResult = false;
          this.games$ = this.store.pipe(select(state => state.games.allSearch));
        }
      }
    );
  }
}
