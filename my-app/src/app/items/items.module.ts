import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { AbstractComponent } from './containers/abstract/abstract.component';
import { ItemRoutingModule } from './item.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ],
  declarations: [ListComponent, AbstractComponent],
  exports: [ListComponent, AbstractComponent]
})
export class ItemsModule { }
