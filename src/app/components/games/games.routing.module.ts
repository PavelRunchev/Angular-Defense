import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../../authentication/guards/admin.guard';

import { CreateGameComponent } from './create-game/create-game.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { DetailsGameComponent } from './details-game/details-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { AllPostedGamesComponent } from './all-posted-games/all-posted-games.component';
import { DetailsPostedGameComponent } from './details-posted-game/details-posted-game.component';
import { DetailsMyGameComponent } from './details-my-game/details-my-game.component';
import { EditPostedGameComponent } from './edit-posted-game/edit-posted-game.component';

const gamesRoutes: Routes = [
  { path: 'allGames', component: AllGamesComponent },
  { path: 'createGame', canActivate: [AdminGuard], component: CreateGameComponent },
  { path: 'detailsGame/:id', component: DetailsGameComponent },
  { path: 'editGame/:id', canActivate: [AdminGuard], component: EditGameComponent },
  { path: 'myGames', component: MyGamesComponent },
  { path: 'detailsMyGame/:id', component: DetailsMyGameComponent },
  { path: 'allPostedGames', component: AllPostedGamesComponent },
  { path: 'detailsPostedGame/:id', component: DetailsPostedGameComponent },
  { path: 'editPostedGame/:id', canActivate: [AdminGuard], component: EditPostedGameComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(gamesRoutes)
  ],
  exports: [ RouterModule ]
})
export class GameRoutingModule { }
