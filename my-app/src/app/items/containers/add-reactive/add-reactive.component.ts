import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { DateService } from '../../../core/services/date.service';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {
  constructor(
    private collectionService: CollectionService,
    private dateService: DateService
  ) { }

  ngOnInit() {
  }

  add(event: any) {
  event['deliveryDate'] = this.dateService.convertDate(event);
  this.collectionService.add(event);
  }


}
