import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../authentication/auth.service';

import { MyGameModel } from './../models/my-game.model';
import { GameService } from './../game.survice';

@Component({
  selector: 'app-posted-details-game',
  templateUrl: './posted-details-game.component.html',
  styleUrls: ['./posted-details-game.component.css']
})
export class PostedDetailsGameComponent implements OnInit {
  id: string;
  postGame: MyGameModel;

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
    this.gameService.myDetailsGame(this.id)
      .subscribe((data) => {
        this.postGame = data;
    });
  }

  giveRank(choice) {
    if(choice === undefined) {
      return this.toastr.warning('Not selected raiting!');
    } 

    if(this.postGame.taker === localStorage.getItem('username')) {
      return this.toastr.warning('You can not posted rank in your game!');
    }
      
    this.postGame['rank'] = Number(this.postGame['rank']) + Number(choice);
    this.gameService
      .postGame(this.id, this.postGame)
      .subscribe(() => {
        this.toastr.success('You have your choice successful');
        this.router.navigate(['/allPostedGames']);
      });
  }

  deleteGame(id) {
    this.gameService
      .removeMyGame(id)
      .subscribe(() => {
        this.toastr.success('Deleted game successful from Admin!');
        this.router.navigate(['/games/allPostedGames']);
      });
  }

  removePost(id) {
    this.postGame['isPost'] = false;
    this.postGame['rank'] = 0;
    this.gameService
        .postGame(id, this.postGame)
        .subscribe(() => {
          this.toastr.success('Posted game is removed Successful!');
          this.router.navigate(['/allPostedGames']);
        });
  }
}
