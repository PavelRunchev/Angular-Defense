import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { SharedComponents } from './index';

@NgModule({
    declarations: [
        ...SharedComponents
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        ...SharedComponents
    ]
})
export class SharedModule { }