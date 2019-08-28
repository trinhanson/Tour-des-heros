import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-insert-remove',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({opacity: 0}),
        animate('5s', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('5s', style({opacity: 0}))
      ])
    ])
  ],
  templateUrl: './insert-remove.component.html',
  styleUrls: ['./insert-remove.component.css']
})
export class InsertRemoveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
