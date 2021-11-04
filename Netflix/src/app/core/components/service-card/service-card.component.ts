import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'app/shared/models/Service';

@Component({
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() services: Service[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
