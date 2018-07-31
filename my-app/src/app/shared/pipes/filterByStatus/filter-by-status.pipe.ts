import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../../state.enum';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(v => v.state === State.ALIVRER || v.state === State.ENCOURS);
  }

}
