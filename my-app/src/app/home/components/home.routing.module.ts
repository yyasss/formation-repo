import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const homeRoutes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
})
export class HomeRoutingModule { }
