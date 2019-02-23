import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/guards/auth.guard';

import { HomeComponent } from './components/home//home.component';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';
import { AuthModule } from './authentication/auth.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: './authentication/auth.module#AuthModule' },
  { path: 'supports', loadChildren: './components/supports/supports.module#SupportsModule' },
  { path: 'games', canActivate: [AuthGuard], loadChildren: './components/games/games.module#GamesModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
