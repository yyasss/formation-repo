import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

public convertDate(item: Item): string {
return new Date(item.deliveryDate).toISOString();
}

}
