import { Component, OnInit, OnChanges } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interface/item';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends AbstractComponent implements OnInit {

  constructor(collectionService: CollectionService) {
    super(collectionService);
    super.ngOnInit();
  }

}
