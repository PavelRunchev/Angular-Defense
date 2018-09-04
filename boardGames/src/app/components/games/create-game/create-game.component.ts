import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.survice';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  createFailed : boolean;
  errorMessage : string;

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
    'date': new FormControl('2017',
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
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  createGame() {
    this.gameService
      .createGame(this.form.value)
      .subscribe(() => {
          this.toastr.info('Created Game Successful');
          this.router.navigate(['/allGames']);
      }, err => {
        this.createFailed = true;
        this.errorMessage = err['error']['description'];
      });
  }
}
