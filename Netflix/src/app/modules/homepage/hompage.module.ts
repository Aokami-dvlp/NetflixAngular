import { NgModule } from '@angular/core';

import { HompageRoutingModule } from './hompage-routing.module';
import { FaqCardComponent } from './faq-card/faq-card.component';
import { FaqContainerComponent } from './faq-container/faq-container.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { FormMailComponentComponent } from './form-mail-component/form-mail-component.component';
import { HeroContainerComponent } from './hero-container/hero-container.component';
import { LangButtonComponent } from './lang-button/lang-button.component';
import { LinksContainerComponent } from './links-container/links-container.component';
import { NavbarContainerComponent } from './navbar-container/navbar-container.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceContainerComponent } from './service-container/service-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './homepage.component';


@NgModule({
  declarations: [
    FaqContainerComponent,
    FaqListComponent,
    FaqCardComponent,
    FooterContainerComponent,
    FormMailComponentComponent,
    HeroContainerComponent,
    LangButtonComponent,
    LinksContainerComponent,
    NavbarContainerComponent,
    ServiceCardComponent,
    ServiceContainerComponent,
    HomepageComponent
  ],
  imports: [

    HompageRoutingModule,
    NgbModule,
    BrowserModule
  ]
})
export class HompageModule { }
