import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceContainerComponent } from './homepage/service-container/service-container.component';
import { ServiceCardComponent } from './homepage/service-card/service-card.component';
import { LoginpageComponent } from 'src/app/loginpage/loginpage.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component'


@NgModule({
  declarations: [
    AppComponent,
    ServiceContainerComponent,
    ServiceCardComponent,
    LoginpageComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
