import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interface/item';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {

  constructor(protected collectionService: CollectionService) { }

  public collection: Item[];

  ngOnInit() {
    this.collection = this.collectionService.collection;
  }
}
