import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { GameRoutingModule } from './game-routing.module';

import { gameComponents } from './index';
import { GameService } from './game.survice';

@NgModule({
    declarations: [
        ...gameComponents
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        FormsModule,
        GameRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        GameService
    ],
    exports: [
        CommonModule
    ]
})
export class GameModule { }