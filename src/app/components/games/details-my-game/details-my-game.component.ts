import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MyGameModel } from './../models/my-game.model';
import { GamesService } from '../game.service';

import { Store, select } from '../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-details-my-game',
  templateUrl: './details-my-game.component.html',
  styleUrls: ['./details-my-game.component.scss']
})
export class DetailsMyGameComponent implements OnInit {
  myGame: MyGameModel;
  post: boolean = false;
  id: string;
  freeDownload: boolean = false;
  key: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.gamesService.detailsMyGame(this.id)
      .subscribe(() => {
        this.store.pipe(select(state => state.myGames.detailsMyGame))
        .subscribe(data => this.myGame = data);

        this.freeDownload = Number(this.myGame['rank']) >= 20 ? true : false ;
    });
  }

  getKey() {
    this.key = this.key === true ? false : true;
    console.log(this.key);
  }

  deleteMyGame(id: string) {
    this.gamesService.deleteMyGame(id).subscribe(() => {
      this.toastr.success('Deleted Game Successful!');
      this.router.navigate(['/games/myGames']);
    });
  }

  postedGame(id: string) {
    if (this.myGame['isPost'] === true) {
      return this.toastr.warning('The game is posted!');
    }

    this.post = true;
    this.myGame['isPost'] = this.post;
    this.gamesService.postGame(id, this.myGame)
      .subscribe(() => {
        this.toastr.success('Posted Game Successful!');
        this.router.navigate(['/games/allPostedGames']);
      });
  }
}
