import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { GameModel } from './../models/game.model';
import { GameService } from './../game.survice';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  games: GameModel[];
  pageSize: number = 3;
  currentPage: number = 1;
  noSearchedResult: boolean = false;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private gameService: GameService
  ) { }

  ngOnInit() {
     this.gameService.getAllGames().subscribe((data) => { this.games = data });
  }

  changePage(page) {
    this.currentPage = page;
  }

  search(value: string) {
    this.gameService
      .searchGame(value)
      .subscribe((data) => {
        if(data.length === 0) {
          this.noSearchedResult = true;
          this.games = [];
        } else {
          this.noSearchedResult = false;
          this.games = data; 
        }
    });
  }
}
