import { Component, OnInit } from '@angular/core';
import { MyGameModel } from './../games/models/my-game.model';
import { GameService } from '../games/game.survice';
import { AuthService } from '../../authentication/auth.service';

import { Store, select } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  highestGame: MyGameModel;
  observablePostedGames: Observable<MyGameModel[]>;
  postedGames: MyGameModel[];
  noRaiting: boolean = false;

  constructor(
    private gameService: GameService,
    private authService: AuthService,
    private store: Store<AppState>
  ) { 

  }

  ngOnInit() {
    if(this.authService.checkIfLogged()) {
      this.gameService
      .postedAllGames()
      .subscribe(() => {
        this.observablePostedGames = this.store
        .pipe(select(state => 
            state
              .postedGames
              .allPosted
              ));
        
        //get from Observable value to MyGameModel[] array!
        this.postedGames = this.observablePostedGames['actionsObserver']['_value']['payload'];

        if(this.postedGames.length === 0) {
          this.noRaiting = true;
        } else {
          this.noRaiting = false;
          this.highestGame = 
            this.postedGames.sort((a, b) => Number(b.rank) - Number(a.rank))[0];
        }
      });
    }
  }
}
