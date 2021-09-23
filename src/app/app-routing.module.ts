import { useAnimation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakersignupComponent } from './bakersignup/bakersignup.component';
import { LoginComponent } from './login/login.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [{path:"" , component:BakersignupComponent} , {path:"usersign" , component:UsersignupComponent} ,{path:'login' , component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
