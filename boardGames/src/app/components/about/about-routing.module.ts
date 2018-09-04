import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { SpecialThanksComponent } from './special-thanks/special-thanks.component';

const aboutRoutes: Routes = [
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'specialThenks', component: SpecialThanksComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutRoutingModule { }