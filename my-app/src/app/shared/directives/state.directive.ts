import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { State } from '../state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit, OnChanges {


  @Input() appState: string;
  @HostBinding('class') nomClass: string;


 ngOnInit(): void {
}

// Le mettre dans le onChange permet de reloader le component et rafraichir avec les nouvelles valeurs du tableau.
ngOnChanges() {
  this.nomClass = this.formatClass(this.appState);
}

  constructor() {
  }

// Retourne un string dans la propriété [class] qui sera écrasé par [app-state] grace à hostBinding
// qui lui dit utilise la propriété [app-state] en [class] on pourrait la lié à n'importe quel autre propriété
  private formatClass(state: string): string {
   return 'state-' + state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase();
  }

}
