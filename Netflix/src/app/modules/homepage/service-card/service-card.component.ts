import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'app/models/Service';

@Component({
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() service!: Service;

  constructor() { }

  ngOnInit(): void {
  }

  changeDirection(service: Service) {
    if (service.id % 2 === 0)
      return 'row-reverse';
      else
      return 'row';
  }

}
