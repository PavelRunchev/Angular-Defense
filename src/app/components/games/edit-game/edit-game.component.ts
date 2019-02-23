
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

import { GameModel } from '../models/game.model';
import { GamesService } from '../game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  gameEdit: GameModel;
  id: string;
  editFailed: boolean;
  errorMessage: string;

  formEdit = new FormGroup({
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

    this.gamesService.getToEditById(this.id)
      .subscribe(() => {
        this.store.pipe(select(state => state.games.edit))
        .subscribe(gameToEdit => this.gameEdit = gameToEdit);
      });
  }

  editGame() {
    const editedGame = {
      _id: this.id,
      title: this.formEdit.get('title').value || this.gameEdit.title,
      publisher: this.formEdit.get('publisher').value || this.gameEdit.publisher,
      platform: this.formEdit.get('platform').value || this.gameEdit.platform,
      genre: this.formEdit.get('genre').value || this.gameEdit.genre,
      date: this.formEdit.get('date').value || this.gameEdit.date,
      trailerUrl: this.formEdit.get('trailerUrl').value || this.gameEdit.trailerUrl,
      downloadUrl: this.formEdit.get('downloadUrl').value || this.gameEdit.downloadUrl,
      imageUrl: this.formEdit.get('imageUrl').value || this.gameEdit.imageUrl,
      description: this.formEdit.get('description').value || this.gameEdit.description
    };

    this.gamesService.editGame(this.id, editedGame)
      .subscribe(() => {
        this.toastr.success('Edited Game Successful!');
        this.router.navigate(['/games/allGames']);
      }, err => {
        this.editFailed = true;
        this.errorMessage = err['error']['description'];
      });
  }
}
