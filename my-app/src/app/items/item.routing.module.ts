import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './containers/list/list.component';
import { RouterModule } from '@angular/router';

const listRoutes = [
  {path: 'list', component: ListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(listRoutes)
  ],
})
export class ItemRoutingModule { }
