import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

public item: Item;
public state = Object.values(State);

   @Output() newItem: EventEmitter<Item> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
 this.item = {
   id: '',
   name: '',
   reference: '',
   deliveryDate: '',
   state: State.ALIVRER,
 };
  }

  process() {
    this.newItem.emit(this.item);
    this.router.navigate(['items/list']);
    this.initForm();
  }

}
