import { Faq } from './../../models/faq';
import { Component, Input, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss'],
  providers: [NgbAccordionConfig]
})
export class FaqCardComponent implements OnInit {

@Input() faq!:Faq;

  constructor() { }

  ngOnInit(): void {
    console.log(this.faq);
  }

}
