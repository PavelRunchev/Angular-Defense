import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { authComponents } from './index';

@NgModule({
    declarations: [
        ...authComponents
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthService
    ],
    exports: [
        CommonModule
    ]
})
export class AuthModule { }