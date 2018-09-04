import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../authentication/auth.service';
import { UUID } from 'angular2-uuid';


import { GameModel } from './../models/game.model';
import { GameService } from './../game.survice';
import { CreateMyGameModel } from './../models/create-my-game.model';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.css']
})
export class DetailsGameComponent implements OnInit {
  game: GameModel;
  createMyGame: CreateMyGameModel;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private toastr : ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.gameService.detailsGame(this.id)
      .subscribe((data) => {
        this.game = data;
    });
  }

  deleteGame(id: string) {
    this.gameService
      .removeGame(id)
      .subscribe(() => {
        this.toastr.success('Deleted game successful!');
        this.router.navigate(['/allGames']);
      });
  }

  takeGame() {
    let title = this.game.title;
    let publisher = this.game.publisher;
    let description = this.game.description;
    let imageUrl = this.game.imageUrl;
    let date = this.game.date;
    let genre = this.game.genre;
    let platform = this.game.platform;
    let trailerUrl = this.game.trailerUrl;
    let downloadUrl = this.game.downloadUrl;
    let rank = 0;
    let key = UUID.UUID();
    let taker = localStorage.getItem('username');
    let isPost = false;

    let takerGame = { title, publisher, description, imageUrl, date, genre, platform, trailerUrl, downloadUrl, rank, key, taker, isPost };
    this.gameService
      .createMyGame(takerGame)
      .subscribe(() => {
        this.toastr.success('Take game successful!');
        this.router.navigate(['/myGames']);
      });
  }
}
