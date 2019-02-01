
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SupportsComponent } from './index-supports';
import { SupportsRoutingModule } from './supports.routing.module';

@NgModule({
  declarations: [ ...SupportsComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SupportsRoutingModule
  ],
  exports: [
    CommonModule,
    SupportsRoutingModule
  ]
})
export class SupportsModule { }
