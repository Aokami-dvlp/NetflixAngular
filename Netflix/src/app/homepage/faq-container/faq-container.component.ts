import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.scss'],
  providers: [NgbAccordionConfig]
})

export class FaqContainerComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}

