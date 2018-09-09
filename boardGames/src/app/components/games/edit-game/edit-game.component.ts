import { Component, OnInit } from '@angular/core';
import { GameModel } from '../models/game.model';
import { GameService } from '../game.survice';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store, select } from '../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  gameEdit: GameModel;
  editFailed : boolean;
  errorMessage : string;
  id: string;

  form = new FormGroup({
    'title': new FormControl('', 
      [ Validators.required, 
        Validators.minLength(3),
        Validators.pattern("^[A-Za-z0-9 ]+$")
      ]
    ),
    'publisher': new FormControl('',
      [ Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[A-Za-z0-9 ]+$")
      ]),
    'description': new FormControl('',
      [ Validators.required,
        Validators.minLength(10),
        Validators.maxLength(355)
      ]
    ),
    'imageUrl': new FormControl('',
      [ Validators.required,
        Validators.pattern("^.*\.(jpg|jpeg|gif|JPG|png|PNG)$")
      ]
    ),
    'date': new FormControl('',
      [ Validators.required,
        Validators.min(1996),
        Validators.max(2020)
      ]
    ),
    'genre': new FormControl('',
      [ Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[A-Z][A-Za-z- ]+$")
      ]
    ),
    'platform': new FormControl('', 
      [ Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[A-Z][A-Za-z-]+$")
      ]
    ),
    'trailerUrl': new FormControl('',
      [ Validators.required,
        Validators.pattern("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$")
      ]
    ),
    'downloadUrl': new FormControl('',
      [ Validators.required,
        Validators.pattern("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$")
      ]
    )
  });

  constructor(
    private gameService: GameService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.gameService
      .getToEditById(this.id)
      .subscribe(() => {
        this.store
          .pipe(select(state => state.games.toEdit))
          .subscribe(gameToEdit => this.gameEdit = gameToEdit);
        console.log(this.gameEdit);
    })
    console.log(this.id);
  }

  editGame() {
    let editGame = {
      id: this.id,
      title: this.form.get('title').value || this.gameEdit.title,
      publisher: this.form.get('publisher').value || this.gameEdit.publisher,
      description: this.form.get('description').value || this.gameEdit.description,
      imageUrl: this.form.get('imageUrl').value || this.gameEdit.imageUrl,
      date: this.form.get('date').value || this.gameEdit.date,
      genre: this.form.get('genre').value || this.gameEdit.genre,
      platform: this.form.get('platform').value || this.gameEdit.platform,
      trailerUrl: this.form.get('trailerUrl').value || this.gameEdit.trailerUrl,
      downloadUrl: this.form.get('downloadUrl').value || this.gameEdit.downloadUrl,
    }
    
    this.gameService
      .editGame(this.id, editGame)
      .subscribe(() => {
        this.toastr.success('Edited game Successful!');
        this.router.navigate(['/allGames']);
      }, err => {
        this.editFailed = true;
        this.errorMessage = err['error']['description'];
      });
  }
}
