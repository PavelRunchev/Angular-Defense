import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app.routing';

import { AuthModule } from './authentication/auth.module';
import { AuthService } from './authentication/auth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './components/shared/shared.module';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';
import { SupportsModule } from './components/supports/supports.module';
import { GameModule } from './components/games/game.module';

import { StoreModule } from '../../node_modules/@ngrx/store';
import { appReducers } from './store/app.reducers';

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
    SupportsModule,
    StoreModule.forRoot(appReducers),
    GameModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
