import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item/item.component';
import { NavComponent } from './components/nav/nav.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatusPipe } from './pipes/filterByStatus/filter-by-status.pipe';
import { DeliveredComponent } from './components/delivered/delivered/delivered.component';
import { StateDirective } from './directives/state.directive';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatusPipe, DeliveredComponent, StateDirective],
  exports: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatusPipe],
})
export class SharedModule { }
