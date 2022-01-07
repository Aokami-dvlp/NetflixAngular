import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { LoginpageComponent } from './modules/loginpage/loginpage.component';
import { UserPageComponent } from './modules/user-page/userpage/user-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./modules/homepage/hompage.module').then(m => m.HompageModule) },
  {path:'login',component:LoginpageComponent},
  {path:'user',component:UserPageComponent},
  {path:'',component:HomepageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
