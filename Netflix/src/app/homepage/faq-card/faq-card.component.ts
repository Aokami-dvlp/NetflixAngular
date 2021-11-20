import { Faq } from './../../models/faq';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss']
})
export class FaqCardComponent implements OnInit {

@Input() faq!:Faq;

  constructor() { }

  ngOnInit(): void {
  }

}
