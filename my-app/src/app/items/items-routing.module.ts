import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './containers/add/add.component';
import { ListComponent } from './containers/list/list.component';
import { LivreesComponent } from './containers/livrees/livrees.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivreesComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-reactive', component: AddReactiveComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
