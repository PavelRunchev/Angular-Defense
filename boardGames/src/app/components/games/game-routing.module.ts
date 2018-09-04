import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AllGamesComponent } from './all-games/all-games.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { DetailsGameComponent } from './details-game/details-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { MyDetailsGameComponent } from './my-details-game/my-details-game.component';
import { AllPostedGamesComponent } from './all-posted-games/all-posted-games.component';
import { PostedDetailsGameComponent } from './posted-details-game/posted-details-game.component';
import { AuthGuard } from '../../authentication/guards/auth.guard';

const gameRoutes: Routes = [
    { path: 'allGames', component: AllGamesComponent },
    { path: 'createGame', component: CreateGameComponent },
    { path: 'detailsGame/:id', component: DetailsGameComponent },
    { path: 'editGame/:id', component: EditGameComponent },
    { path: 'myGames', component: MyGamesComponent },
    { path: 'detailsMyGame/:id', component: MyDetailsGameComponent },
    { path: 'allPostedGames', component: AllPostedGamesComponent },
    { path: 'postedGameDetails/:id', component: PostedDetailsGameComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(gameRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GameRoutingModule { }