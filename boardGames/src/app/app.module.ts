import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './authentication/auth.module';
import { CustomFormsModule } from 'ng2-validation';

import { AuthService } from './authentication/auth.service';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/nav.module';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from 'src/app/app.routing';
import { GameModule } from './components/games/game.module';
import { AboutModule } from './components/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    GameModule,
    CustomFormsModule,
    AboutModule,
    ReactiveFormsModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
