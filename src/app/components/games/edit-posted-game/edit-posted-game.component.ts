import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

import { MyGameModel } from '../models/my-game.model';
import { GamesService } from '../game.service';

@Component({
  selector: 'app-edit-posted-game',
  templateUrl: './edit-posted-game.component.html',
  styleUrls: ['./edit-posted-game.component.scss']
})
export class EditPostedGameComponent implements OnInit {
  editPostedGame: MyGameModel;
  editPostFailed: boolean;
  errorMessage: string;
  id: string;

  formPostEdit = new FormGroup({
    'title': new FormControl('', [
      Validators.required, Validators.minLength(3),
      Validators.pattern('^[A-Z][A-Za-z0-9 ]+$')
    ]),
    'publisher': new FormControl('', [
      Validators.required, Validators.minLength(2),
      Validators.pattern('^[A-Za-z0-9 ]+$')
    ]),
    'platform': new FormControl('', [
      Validators.required, Validators.minLength(2),
      Validators.pattern('^[A-Z][A-Za-z-]+$')
    ]),
    'genre': new FormControl('', [
      Validators.required, Validators.minLength(3),
      Validators.pattern('^[A-Z][A-Za-z- ]+$')
    ]),
    'date': new FormControl('2018', [
      Validators.required, Validators.min(1996),
      Validators.max(2020)
    ]),
    'trailerUrl': new FormControl('', [
      Validators.required,
      Validators.pattern('^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$')
    ]),
    'downloadUrl': new FormControl('', [
      Validators.required,
      Validators.pattern('^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$')
    ]),
    'imageUrl': new FormControl('', [
      Validators.required,
      Validators.pattern('^.*.(jpg|jpeg|gif|JPG|png|PNG)$')
    ]),
    'description': new FormControl('', [
      Validators.required, Validators.minLength(10),
      Validators.maxLength(355)
    ]),
    'taker': new FormControl('', [
      Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')
    ]),
    'isPost': new FormControl('', [ Validators.required
    ]),
    'rank': new FormControl('', [ Validators.required,
      Validators.min(0), Validators.max(6)
    ])
  });

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.gamesService.postGameById(this.id)
      .subscribe(() => {
        this.store.pipe(select(state => state.postedGames.editPostedGame))
        .subscribe(data => this.editPostedGame = data);
      });
  }

  editPostGame() {
    const newEditedPostGame = {
      _id: this.id,
      title: this.formPostEdit.get('title').value || this.editPostedGame.title,
      publisher: this.formPostEdit.get('publisher').value || this.editPostedGame.publisher,
      platform: this.formPostEdit.get('platform').value || this.editPostedGame.platform,
      genre: this.formPostEdit.get('genre').value || this.editPostedGame.genre,
      date: this.formPostEdit.get('date').value || this.editPostedGame.date,
      trailerUrl: this.formPostEdit.get('trailerUrl').value || this.editPostedGame.trailerUrl,
      downloadUrl: this.formPostEdit.get('downloadUrl').value || this.editPostedGame.downloadUrl,
      imageUrl: this.formPostEdit.get('imageUrl').value || this.editPostedGame.imageUrl,
      description: this.formPostEdit.get('description').value || this.editPostedGame.description,
      taker: this.formPostEdit.get('taker').value || this.editPostedGame.taker,
      rank: this.formPostEdit.get('rank').value || this.editPostedGame.rank,
      isPost: this.formPostEdit.get('isPost').value || this.editPostedGame.isPost,
      key: this.editPostedGame.key,
    };

    this.gamesService.editPostGame(this.id, newEditedPostGame)
      .subscribe(() => {
        this.toastr.success('Edited Post Game Successful!');
        this.router.navigate(['/games/allPostedGames']);
      }, err => {
        this.editPostFailed = true;
        this.errorMessage = err['error']['description'];
      });
  }
}
