import { UserPageComponent } from './userpage/user-page.component';
import { SharedModule } from './../../shared/components/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';


@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    UserpageRoutingModule,
    SharedModule,
  ]
})
export class UserpageModule { }
