import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';



const loginRoutes = [
  {path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
})
export class LoginRoutingModule { }
