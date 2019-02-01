import { Component, OnInit } from '@angular/core';
import { ContactsAnimation } from './contacts.animation';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: ContactsAnimation
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
