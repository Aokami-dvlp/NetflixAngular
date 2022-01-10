import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/models/user-interface';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users:IUser[] = [{
  id: 1,
  name: 'Marco',
  imgUrl: "assets/La-Casa-de-Papel_Profile-Icon_01_Denver.jpg",
  language: 'italiano',
  isKid: false
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
