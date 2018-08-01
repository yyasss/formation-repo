import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { DeliveredComponent } from './shared/components/delivered/delivered/delivered.component';


const appRoutes = [
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: './items/items.module#ItemsModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#homeModule',
  },
  {path: 'delivered', component: DeliveredComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false, preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
