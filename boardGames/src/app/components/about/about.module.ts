import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { aboutComponents } from './index';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    declarations: [
        ...aboutComponents
    ],
    imports: [
        FormsModule,
        CommonModule,
        AboutRoutingModule
    ],
    providers: [
       
    ],
    exports: [
        CommonModule
    ]
})
export class AboutModule { }