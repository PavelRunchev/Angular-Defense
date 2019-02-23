import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { GameRoutingModule } from './games.routing.module';
import { GameComponents } from './index';

@NgModule({
  declarations: [ ...GameComponents ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    GameRoutingModule
  ]
})
export class GamesModule { }
