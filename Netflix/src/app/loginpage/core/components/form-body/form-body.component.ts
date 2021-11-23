import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-body',
  templateUrl: './form-body.component.html',
  styleUrls: ['./form-body.component.scss']
})
export class FormBodyComponent implements OnInit {
  unclicked: string = 'Scopri di più.';
  constructor() { }

  ngOnInit(): void {
  }

  info(): void {
    this.unclicked = '';
  }
}
