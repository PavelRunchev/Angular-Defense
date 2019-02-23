import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from './../game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  createFailed: boolean = false;
  errorMessage: string;

  createGameForm = new FormGroup({
    'title': new FormControl('',
    [ Validators.required, Validators.minLength(3),
      Validators.pattern('^[A-Z][A-Za-z0-9 ]+$') ]
    ),
    'publisher': new FormControl('',
    [ Validators.required, Validators.minLength(2),
      Validators.pattern('^[A-Z][A-Za-z0-9 ]+$') ]
    ),
    'platform': new FormControl('',
      [ Validators.required, Validators.minLength(2),
      Validators.pattern('^[A-Z][A-Za-z-]+$') ]
    ),
    'genre': new FormControl('',
     [ Validators.required, Validators.minLength(3),
      Validators.pattern('^[A-Z][A-Za-z- ]+$') ]
    ),
    'date': new FormControl('2018',
    [ Validators.required, Validators.min(1996), Validators.max(2020) ]
    ),
    'trailerUrl': new FormControl('',
      [ Validators.required,
        Validators.pattern('^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$') ]
    ),
    'downloadUrl': new FormControl('',
      [ Validators.required,
       Validators.pattern('^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$') ]
    ),
    'imageUrl': new FormControl('',
    [ Validators.required, Validators.pattern('^.*.(jpg|jpeg|gif|JPG|png|PNG)$') ]
    ),
    'description': new FormControl('',
    [ Validators.required, Validators.minLength(10),
      Validators.maxLength(355) ]
    ),
  });

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private gamesService: GamesService
  ) { }

  ngOnInit() { }

  createGame() {
    this.gamesService
      .createGame(this.createGameForm.value)
      .subscribe(() => {
        this.toastr.success('Create Game Successful!');
        this.router.navigate(['/games/allGames']);
      }, err => {
        this.createFailed = true;
        this.errorMessage = err['error']['description'];
      });
  }
}
