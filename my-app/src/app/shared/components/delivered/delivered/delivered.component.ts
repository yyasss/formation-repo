import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../interface/item';
import { State } from '../../../state.enum';
import { CollectionService } from '../../../../core/services/collection.service';
import { AbstractComponent } from '../../../../items/containers/abstract/abstract.component';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.css']
})
export class DeliveredComponent extends AbstractComponent implements OnInit {

 public state = State;
 public collection: Item[];

  constructor(collectionService: CollectionService) {
    super(collectionService);
    super.ngOnInit();
    this.collection = collectionService.collection.filter(c => c.state === State.LIVREE);
    console.log(this.collection);
   }

ngOnInit() {
}


}
