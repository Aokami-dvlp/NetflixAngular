import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from './../../../shared/models/credentials'


@Component({
  selector: 'form-body',
  templateUrl: './form-body.component.html',
  styleUrls: ['./form-body.component.scss']
})
export class FormBodyComponent implements OnInit {

  unclicked: string = 'Scopri di più.';

  @Output() fakeLogIn = new EventEmitter<Credentials>();

  public credentials = new FormGroup({
    emailNumber: new FormControl('', [Validators.required, Validators.pattern("^([0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)])
  });

  public isNumber: boolean | undefined;

  get emailNumber(): AbstractControl{
    return this.credentials.get('emailNumber')!
  }
  get password(): AbstractControl{
    return this.credentials.get('password')!
  }
  constructor() { }


  ngOnInit(): void {
    this.emailNumber.valueChanges.subscribe(str => {
      if (str.length > 4) {
        this.isNumber = !isNaN(str);
      } else {
        this.isNumber = undefined
      }
    })
  }

  logIn(){
    const credentials: Credentials = {
      emailOrNumber : this.emailNumber.value,
      password : this.password.value
    };
    this.fakeLogIn.emit(credentials)
  }

  info(): void {
    this.unclicked = '';
  }
}
