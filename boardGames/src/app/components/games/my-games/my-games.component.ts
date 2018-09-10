import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MyGameModel } from './../models/my-game.model';
import { GameService } from './../game.survice';

import { Observable } from 'rxjs';
import { Store, select } from '../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {
  myGames: MyGameModel[];
  observableMyGames$: Observable<MyGameModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;
  noAddMyGames: boolean = false;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private gameService: GameService,
    private store: Store<AppState>
  ) {
    
   }

  ngOnInit() {
    this.gameService.getMyGames()
      .subscribe(() => { 
        this.observableMyGames$ = this.store.pipe(select(state => state.myGames.allMyGames));
        this.myGames = this.observableMyGames$['actionsObserver']['_value']['payload'];

        if(this.myGames.length === 0) {
          this.noAddMyGames = true;
        } else {
          this.noAddMyGames = false;
        }
      });
  }

  changePage(page) {
    this.currentPage = page;
  }
}
