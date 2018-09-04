import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './authentication/guards/auth.guard';

import { SigninComponent } from './authentication/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { GameModule } from "./components/games/game.module";
import { AboutModule } from "./components/about/about.module";

const routes : Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'about', canActivate: [AuthGuard], loadChildren: () => AboutModule },
    { path: 'games', canActivate: [AuthGuard], loadChildren: () => GameModule }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],  
    exports: [ RouterModule ]
})

export class AppRoutingModule {}