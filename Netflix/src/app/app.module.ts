import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { LoginpageComponent } from './modules/loginpage/loginpage.component';
import { HeaderComponent } from './modules/loginpage/header/header.component';

import { FooterComponent } from './modules/loginpage/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { UserPageComponent } from './modules/user-page/userpage/user-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HeaderComponent,
    FooterComponent,
    UserPageComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
