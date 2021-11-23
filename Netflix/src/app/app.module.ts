import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginFormComponent } from './loginpage/core/components/login-form/login-form.component';
import { FormBodyComponent } from './loginpage/core/components/form-body/form-body.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    LoginFormComponent,
    FormBodyComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
