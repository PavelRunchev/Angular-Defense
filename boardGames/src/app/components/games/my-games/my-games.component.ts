import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MyGameModel } from './../models/my-game.model';
import { GameService } from './../game.survice';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {
  mygames;
  pageSize: number = 3;
  currentPage: number = 1;
  noAddMyGames: boolean = false;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private gameService: GameService
  ) {
    
   }

  ngOnInit() {
    this.gameService.getMyGames()
      .subscribe((data) => { 
        if(data.length === 0) {
          this.noAddMyGames = true;
        } else {
          this.noAddMyGames = false;
          this.mygames = data;
        }
      });
  }

  changePage(page) {
    this.currentPage = page;
  }
}
