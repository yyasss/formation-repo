import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

    public form: FormGroup;
    public state = Object.values(State);
    public item: Item;

    @Output() newItem: EventEmitter<Item> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      reference: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      deliveryDate: '',
      state: State.ALIVRER
    });
  }

  process() {
    this.newItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  isError(control: string): boolean {
    if (this.form.get(control).invalid && this.form.get(control).touched && this.form.get(control).dirty) {
      return true;
    } else {
      return false;
    }
  }

}
