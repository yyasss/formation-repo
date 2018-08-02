import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { DateService } from '../../../core/services/date.service';
import { DateFormatterService } from '../../../core/services/date-formatter.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private dateService: DateService,
    private dateFormatterService: DateFormatterService
  ) { }

  ngOnInit() {
  }

  add(event: any) {
  this.collectionService.add(event);
  }

}
