import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedComponents } from './index-shared';

@NgModule({
  declarations: [ ...SharedComponents ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ...SharedComponents
  ]
})
export class SharedModule { }
