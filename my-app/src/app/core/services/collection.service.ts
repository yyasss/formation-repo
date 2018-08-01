import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

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
   * get 1 item from collection
   */

  /**
   * add  item in collection
   */
  add(item: Item) {
    this.collection.push(item);
  }

  /**
   * update item in collection
   */
  public update(item: Item): void {
    // update + catch pour les erreur
  }

  /**
   * delete item in collection
   */
}
