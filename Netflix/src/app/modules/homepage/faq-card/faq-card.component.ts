
import { Component, Input, OnInit } from '@angular/core';
import { Faq } from 'app/shared/models/faq';


@Component({
  selector: 'faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss'],
})
export class FaqCardComponent implements OnInit {

@Input() faq!:Faq;

  constructor() { }

  ngOnInit(): void {
    console.log(this.faq);
  }

}
