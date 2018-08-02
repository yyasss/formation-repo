import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';

// external libraries
import { IconsModule } from '../icons/icons.module';

import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { FormComponent } from './components/form/form.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';

import { StateDirective } from './directives/state.directive';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';


@NgModule({
imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    IconsModule,
    FormsModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe, StateDirective, FormComponent, FormReactiveComponent],
  exports: [NavComponent, ItemComponent, FilterByStatePipe, FormComponent, FormReactiveComponent]
})
export class SharedModule { }
