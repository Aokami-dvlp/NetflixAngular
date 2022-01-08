import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBodyComponent } from './modules/loginpage/form-body/form-body.component'
import { LoginpageComponent } from './modules/loginpage/loginpage.component';
import { HeaderComponent } from './modules/loginpage/header/header.component';

import { FooterComponent } from './modules/loginpage/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { UserPageComponent } from './modules/user-page/userpage/user-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HeaderComponent,
    FooterComponent,
    UserPageComponent,
    FormBodyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
