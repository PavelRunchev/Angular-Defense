import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { ToastrService } from 'ngx-toastr';
import { UUID } from 'angular2-uuid';
import { EmbedVideoService } from 'ngx-embed-video';

import { GameModel } from '../models/game.model';
import { GamesService } from '../game.service';
import { CreateMyGameModel } from '../models/create-my-game.model';
import { AuthService } from '../../../authentication/auth.service';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.scss']
})
export class DetailsGameComponent implements OnInit {
  game: GameModel;
  createMyGame: CreateMyGameModel;
  id: string;
  yt_iframe_html: any;
  youtubeUrl: string;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<AppState>,
    private embedService: EmbedVideoService,
    public authService: AuthService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.gamesService
      .detailsGame(this.id)
      .subscribe(() => {
        this.store.pipe(select(state => state.games.details))
        .subscribe(data => this.game = data);
        this.youtubeUrl = this.game.trailerUrl;
        this.yt_iframe_html = this.embedService.embed(this.youtubeUrl, { attr: { width: 400, height: 350 }});
    });
  }

  takeGame() {
    const takerGame = {
      title: this.game.title,
      publisher: this.game.publisher,
      description: this.game.description,
      imageUrl: this.game.imageUrl,
      date: this.game.date,
      genre: this.game.genre,
      platform: this.game.platform,
      trailerUrl: this.game.trailerUrl,
      downloadUrl: this.game.downloadUrl,
      rank: 0,
      key: UUID.UUID(),
      taker: localStorage.getItem('username'),
      isPost: false
    };

    this.gamesService.createMyGame(takerGame)
      .subscribe(() => {
        this.toastr.success('Take game successful!');
        this.router.navigate(['/games/myGames']);
      });
  }

  deleteGame(id: string) {
    this.gamesService
      .removeGame(id)
      .subscribe(() => {
        this.toastr.success('Deleted game successful!');
        this.router.navigate(['/games/allGames']);
      }, err => {
        this.error = true;
      });
  }
}
