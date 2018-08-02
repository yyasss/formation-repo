import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit, OnDestroy {

  // private sub: Subscription;
  // public collection: Item[];
  public collection: Observable<Item[]>;
  constructor(
    protected collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
     // this.sub = this.collectionService.collection.subscribe(data => {
    //   this.collection = data;
    //   console.log(this.collection);
    // });
  }

  ngOnDestroy(): void {
  //  this.sub.unsubscribe();
  }

}
