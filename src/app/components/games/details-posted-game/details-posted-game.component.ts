
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { EmbedVideoService } from 'ngx-embed-video';

import { MyGameModel } from './../models/my-game.model';
import { GamesService } from '../game.service';
import { AuthService } from '../../../authentication/auth.service';

@Component({
  selector: 'app-details-posted-game',
  templateUrl: './details-posted-game.component.html',
  styleUrls: ['./details-posted-game.component.scss']
})
export class DetailsPostedGameComponent implements OnInit {
  postGame: MyGameModel;
  id: string;
  yt_iframe_html: any;
  youtubeUrl: string;

  formRank = new FormGroup({
    'choice': new FormControl('1', [ Validators.required ])
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private gamesService: GamesService,
    private store: Store<AppState>,
    private embedService: EmbedVideoService,
    public authService: AuthService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.gamesService.detailsPostedGame(this.id).subscribe(() => {
      this.store.pipe(select(state => state.postedGames.detailsPostedGame))
      .subscribe(data => this.postGame = data);
      this.youtubeUrl = this.postGame.trailerUrl;
        this.yt_iframe_html = this.embedService.embed(this.youtubeUrl, { attr: { width: 350, height: 350 }});
    });
  }

  deleteGame(id: string) {
    this.gamesService
      .deleteMyGame(id)
      .subscribe(() => {
        this.toastr.success('Deleted game successful from the Base!');
        this.router.navigate(['/games/allPostedGames']);
      });
  }

  removedPost(id: string) {
    this.postGame['isPost'] = false;
    this.postGame['rank'] = 0;

    this.gamesService.editPostGame(id, this.postGame)
      .subscribe(() => {
        this.toastr.success('Game is removed from Posted Games');
        this.router.navigate(['/games/allPostedGames']);
      });
  }

  giveRank() {
    const rank = this.formRank.get('choice').value;

    if (this.postGame.taker === localStorage.getItem('username')) {
      return this.toastr.warning('You can not posted rank in your game!');
    }

    this.postGame['rank'] = Number(this.postGame['rank']) + Number(rank);
    this.gamesService.postGame(this.id, this.postGame)
      .subscribe(() => {
        this.toastr.success('You have your choice successful.');
        this.router.navigate(['/games/allPostedGames']);
      });
  }
}
