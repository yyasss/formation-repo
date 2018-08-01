import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeliveredComponent } from './shared/components/delivered/delivered/delivered.component';


const appRoutes = [
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {path: 'delivered', component: DeliveredComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
