import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
// import { COLLECTION } from '../collection';
// ORM angular firestore qui permet d'utiliser les méthodes CRUD
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private url_api = 'api.monsite.com/';

  private _collection: Observable<Item[]>;
  constructor(
    private afs: AngularFirestore,
    private httpClient: HttpClient
  ) {
    // this.collection = COLLECTION;
    // on lui donne la base de donnée (index) à utiliser et le type de la collection (si une entité à été crée sinon any)
    this.itemsCollection = afs.collection<Item>('collection');
    this.collection = this.itemsCollection.valueChanges();
 //   this.collection = this.httpClient.get<Item[]>('collection');
  }

  /**
   * get collection
   */
  get collection(): Observable<Item[]> {
    return this._collection;
  }

  /**
   * set collection
   */
  set collection(col: Observable<Item[]>) {
    this._collection = col;
  }

  /**
   * add 1 item to collection
   */
  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  /**
   * update item in collection
   */
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  /**
   * delete item in collection
   */
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
    //  this.httpClient.delete(url, item, option);
  }
}
