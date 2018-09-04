import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../authentication/auth.service';

import { MyGameModel } from './../models/my-game.model';
import { GameService } from './../game.survice';

@Component({
  selector: 'app-my-details-game',
  templateUrl: './my-details-game.component.html',
  styleUrls: ['./my-details-game.component.css']
})
export class MyDetailsGameComponent implements OnInit {
  myGame: MyGameModel;
  id: string;
  freeDownload: boolean = false;
  key: boolean = false;

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
        if(Number(data['rank']) >= 20) {
          this.freeDownload = true;
        }
        this.myGame = data;
    });
  }

  deleteMyGame(id: string) {
    this.gameService
      .removeMyGame(id)
      .subscribe(() => {
        this.toastr.success('Deleted your game successful!');
        this.router.navigate(['/myGames']);
      });
  }

  postedGame(id: string) {
      if(this.myGame['isPost'] === true) {
        return this.toastr.warning('You have posted this game!');
      }

      this.myGame['isPost'] = true;
      this.gameService
        .postGame(id, this.myGame)
        .subscribe(() => {
          this.toastr.success('Posted game Successful!');
          this.router.navigate(['/allPostedGames']);
        });
  }

  getKey() {
    if(this.key === true) {
      this.key = false;
    } else {
      this.key = true;
    }
  }
}
