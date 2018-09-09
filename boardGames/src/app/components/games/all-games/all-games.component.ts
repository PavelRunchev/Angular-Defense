import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { GameModel } from './../models/game.model';
import { GameService } from './../game.survice';
import { Observable } from 'rxjs';
import { Store, select } from '../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  games$: Observable<GameModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;
  noSearchedResult: boolean = false;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private gameService: GameService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
     this.gameService.
      getAllGames()
      .subscribe(() => { 
        this.games$ = this.store
          .pipe(select(state => state.games.all));
      });
  }

  changePage(page) {
    this.currentPage = page;
  }

  search(value: string) {
    this.gameService
      .searchGame(value)
      .subscribe(() => {
        if(this.store.source['_value'].games.allSearch.length === 0) {
          this.noSearchedResult = true;
          this.games$ = null;
        } else {
          this.noSearchedResult = false;
          this.games$ = this.store.pipe(select(state => state.games.allSearch)); 
        }
    });
  }
}
