import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public title = 'Ma super App';
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
