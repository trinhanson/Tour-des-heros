import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-hero-list-page',
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({opacity: 0, width: '0px'}),
          stagger(50, [
            animate('300ms ease-out', style({opacity: 1, width: '*'}))
          ])
        ], {optional: true})
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({opacity: 0, width: '0px'}))
          ])
        ])
      ])
    ])
  ],
  templateUrl: './hero-list-page.component.html',
  styleUrls: ['./hero-list-page.component.css']
})
export class HeroListPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
