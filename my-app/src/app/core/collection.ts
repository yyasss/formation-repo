import { State } from '../shared/state.enum';
import { Item } from '../shared/interface/item';

export const COLLECTION: Item[] = [
  {
    id: 'ssdpks',
    name: 'Yassine',
    reference: '1234',
    deliveryDate: new Date().toISOString(),
    state: State.ALIVRER
  },
  {
    id: 'ssdpks',
    name: 'Yuzhu',
    reference: '1234',
    deliveryDate: new Date().toISOString(),
    state: State.ENCOURS
  },
  {
    id: 'ssdpks',
    name: 'Dominique',
    reference: '1234',
    deliveryDate: new Date().toISOString(),
    state: State.LIVREE
  }
];
