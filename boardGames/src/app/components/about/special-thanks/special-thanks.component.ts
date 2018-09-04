import { Component, OnInit } from '@angular/core';
import { SpecialThanksAnimations } from './special-thanks.animations';

@Component({
  selector: 'app-special-thanks',
  templateUrl: './special-thanks.component.html',
  styleUrls: ['./special-thanks.component.css'],
  animations: SpecialThanksAnimations
})
export class SpecialThanksComponent implements OnInit {
  list = ['Milk', 'Sugar', 'Bread'];

  constructor() { }

  ngOnInit() {
  }

}
