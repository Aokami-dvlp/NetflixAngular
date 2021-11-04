import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceContainerComponent } from './core/components/service-container/service-container.component';
import { ServiceCardComponent } from './core/components/service-card/service-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceContainerComponent,
    ServiceCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
