import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { AbstractComponent } from './containers/abstract/abstract.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListComponent, AbstractComponent],
  exports: [ListComponent, AbstractComponent]
})
export class ItemsModule { }
