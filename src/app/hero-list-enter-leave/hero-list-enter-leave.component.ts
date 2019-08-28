import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero-list-enter-leave',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *',[
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
  templateUrl: './hero-list-enter-leave.component.html',
  styleUrls: ['./hero-list-enter-leave.component.css']
})
export class HeroListEnterLeaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
