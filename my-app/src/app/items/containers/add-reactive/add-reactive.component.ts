import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }

  add(event: Item) {
  this.collectionService.add(event);
  }


}
