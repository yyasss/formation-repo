import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Item } from '../../../interface/item';
import { State } from '../../../state.enum';
import { CollectionService } from '../../../../core/services/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item: Item;
  state = State;

  constructor(private collectionService: CollectionService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }


  changeState(state: State, item: Item) {
    this.collectionService.updateCollection(state, item);
  }

  getStateColor(state: string) {
 if (state === State.ALIVRER) {
   return 'state-alivrer';
 } else if (state === State.LIVREE) {
  return 'state-livree';
} else {
  return 'state-encours';
 }
  }

}
