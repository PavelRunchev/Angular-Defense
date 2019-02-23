import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';

import { AuthService } from './authentication/auth.service';
import { GamesService } from './components/games/game.service';

import { GamesModule } from './components/games/games.module';
import { AuthModule } from './authentication/auth.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './components/shared/shared.module';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';

import { StoreModule } from '../../node_modules/@ngrx/store';
import { appReducers } from './store/app.reducers';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ReactiveFormsModule,
    CustomFormsModule,
    SharedModule,
    GamesModule,
    StoreModule.forRoot(appReducers),
    CommonModule,
    EmbedVideo.forRoot()
  ],
  providers: [
    AuthService,
    GamesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
