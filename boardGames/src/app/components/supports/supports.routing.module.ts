import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContactsComponent } from './contacts/contacts.component';
import { SpecialThanksComponent } from './special-thanks/special-thanks.component';
import { SoftwareTechnologyComponent } from './software-technology/software-technology.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';

const supportsRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'specialthanks', component: SpecialThanksComponent },
  { path: 'support', component: SupportComponent },
  { path: 'softwaretechnology', component: SoftwareTechnologyComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(supportsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SupportsRoutingModule { }
