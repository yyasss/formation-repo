import { Item } from '../shared/interfaces/item';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'smldkfj',
    name: 'Yassine',
    reference: '1234',
    deliveryDate: '2018-07-28T22:00:00.000Z',
    state: State.ALIVRER
  },
  {
    id: 'qsdlkjfl',
    name: 'Yuzhu',
    reference: '2435',
    deliveryDate: '2018-07-29T22:00:00.000Z',
    state: State.ENCOURS
  },
  {
    id: 'lkjlj',
    name: 'Dominique',
    reference: '3646',
    deliveryDate: '2018-07-30T22:00:00.000Z',
    state: State.LIVREE
  },
];
