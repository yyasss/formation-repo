import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { RouterModule } from '../../../node_modules/@angular/router';


const pageNotFoundRoutes = [
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(pageNotFoundRoutes)
  ],
})
export class PageNotFoundRoutingModule { }
