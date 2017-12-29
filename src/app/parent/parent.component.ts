import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  heroes = HEROES;
  master = 'Director';
  major = 1;
  minor = 23;

  constructor() { }

  ngOnInit() {
  }

}
