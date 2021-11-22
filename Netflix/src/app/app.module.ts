import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceContainerComponent } from './homepage/service-container/service-container.component';
import { ServiceCardComponent } from './homepage/service-card/service-card.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './loginpage/header/header.component';

import { FaqContainerComponent } from './homepage/faq-container/faq-container.component';
import { FaqListComponent } from './homepage/faq-list/faq-list.component';
import { FaqCardComponent } from './homepage/faq-card/faq-card.component';

import { FooterContainerComponent } from './homepage/footer-container/footer-container.component';
import { LinksContainerComponent } from './homepage/links-container/links-container.component';
import { LangButtonComponent } from './homepage/lang-button/lang-button.component';
import { NavbarContainerComponent } from './homepage/navbar-container/navbar-container.component';
import { HeroContainerComponent } from './homepage/hero-container/hero-container.component';
import { FormMailComponentComponent } from './homepage/form-mail-component/form-mail-component.component';
import { FooterComponent } from './loginpage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceContainerComponent,
    ServiceCardComponent,
    LoginpageComponent,
    HomepageComponent,
    HeaderComponent,
    FaqContainerComponent,
    FaqListComponent,
    FaqCardComponent,
    FooterContainerComponent,
    LinksContainerComponent,
    LangButtonComponent,
    NavbarContainerComponent,
    HeroContainerComponent,
    FormMailComponentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
