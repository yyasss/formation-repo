import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './components/home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
