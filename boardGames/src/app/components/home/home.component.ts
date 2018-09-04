import { Component, OnInit } from '@angular/core';
import { MyGameModel } from './../games/models/my-game.model';
import { GameService } from '../games/game.survice';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  highestGame: MyGameModel;
  noRaiting: boolean = false;

  constructor(
    private gameService: GameService,
    private authService: AuthService
  ) { 

  }

  ngOnInit() {
    if(this.authService.checkIfLogged()) {
      this.gameService
      .postedAllGames()
      .subscribe((data) => {
        if(data[0]['rank'] === 0) {
          this.noRaiting = true;
        } else {
          this.noRaiting = false;
          this.highestGame = data[0];
        }
      });
    }
  }
}
