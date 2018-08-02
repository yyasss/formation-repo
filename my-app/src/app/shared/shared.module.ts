import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '../../../node_modules/@angular/forms';

// external libraries
import { IconsModule } from '../icons/icons.module';

import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { FormComponent } from './components/form/form.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';

import { StateDirective } from './directives/state.directive';


@NgModule({
imports: [
  CommonModule,
    NgbModule,
    RouterModule,
    IconsModule,
    FormsModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe, StateDirective, FormComponent],
  exports: [NavComponent, ItemComponent, FilterByStatePipe, FormComponent]
})
export class SharedModule { }
