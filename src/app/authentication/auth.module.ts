import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { authComponents } from './index';
import { AuthRoutingModule } from './auth.router.module';

@NgModule({
  declarations: [ ...authComponents ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [ AuthService ]
})
export class AuthModule { }
