import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameService } from './game.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ GameService ],
  exports: [ CommonModule ]
})
export class GameModule { }
