import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./modules/homepage/hompage.module').then(m => m.HompageModule) },
  { path: 'login', loadChildren: () => import('./modules/loginpage/loginpage.module').then(m => m.LoginpageModule) },
  { path: 'user', loadChildren: () => import('./modules/user-page/userpage.module').then(m => m.UserpageModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
