import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroContainerComponent } from './core/components/hero-container/hero-container.component';
import { HeroCardComponent } from './core/components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroContainerComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
