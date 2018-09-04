import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { MyGameModel } from './../models/my-game.model';
import { GameService } from './../game.survice';

@Component({
  selector: 'app-all-posted-games',
  templateUrl: './all-posted-games.component.html',
  styleUrls: ['./all-posted-games.component.css']
})
export class AllPostedGamesComponent implements OnInit {
  postedGames: MyGameModel[];
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private authService: AuthService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.gameService
      .postedAllGames()
      .subscribe((data) => {
        this.postedGames = data.sort((a, b) => Number(b.rank) - Number(a.rank));
    });
  }

  changePage(page) {
    this.currentPage = page;
  }
}
