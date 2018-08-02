import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item';
import { Router } from '../../../../../node_modules/@angular/router';
import { DateFormatterService } from '../../../core/services/date-formatter.service';

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

  constructor(private fb: FormBuilder, private router: Router, private dateFormatterService: DateFormatterService) { }

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
    this.form.value.deliveryDate = this.dateFormatterService.dateToIso(this.form.value.deliveryDate);
    this.newItem.emit(this.form.value);
    this.router.navigate(['items/list']);
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
