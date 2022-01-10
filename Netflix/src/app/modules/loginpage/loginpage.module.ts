import { SharedModule } from './../../shared/components/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginpageComponent } from './loginpage.component';
import { FooterComponent } from './footer/footer.component';
import { FormBodyComponent } from './form-body/form-body.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginpageComponent,
    FooterComponent,
    FormBodyComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    LoginpageRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class LoginpageModule { }
