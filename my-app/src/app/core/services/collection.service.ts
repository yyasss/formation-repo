import { Injectable } from '@angular/core';
import { Item } from '../../shared/interface/item';
import { COLLECTION } from '../collection';
import { State } from '../../shared/state.enum';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * get collection
   */
get collection(): Item[] {
    return this._collection;
  }

  /**
   * set collection
   */
set collection(col: Item[]) {
    this._collection = col;
  }
  /**
   * get one item from collection
   */

  /**
   * update collection
   */
updateCollection(state: State, item: Item) {
if (this._collection.find(x => x.id === item.id)) {
  this._collection.find(x => x.id === item.id).state = state;
}

}
  /**
   * delete collection
   */

  /**
   * add item in collection
   */
}
