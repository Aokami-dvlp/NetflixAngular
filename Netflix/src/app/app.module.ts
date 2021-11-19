import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterContainerComponent } from './homepage/footer-container/footer-container.component';
import { LinksContainerComponent } from './homepage/links-container/links-container.component';
import { LangButtonComponent } from './homepage/lang-button/lang-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    FooterContainerComponent,
    LinksContainerComponent,
    LangButtonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
