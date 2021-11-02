import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'app/shared/models/Hero';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() heroes: Hero[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
