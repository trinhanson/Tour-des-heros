import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      /*state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),*/
      state('true', style({height: '*'})),
      state('false', style({height: '0px'})),
      transition('false <=> true', animate(500)),
      /*transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition('* => open', [
        animate('1s', style({opacity: '*'}))
      ]),
      transition('* => *', [
        animate('1s')
      ])*/
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css']
})
export class OpenCloseComponent implements OnInit {

  // isDisabled = false;

  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }

  onAnimationEvent(event: AnimationEvent){
        // openClose is trigger name in this example
    //console.warn(`Animation Trigger: ${event.triggerName}`);

        // phaseName is start or done
    //console.warn(`Phase: ${event.phaseName}`);
    
        // in our example, totalTime is 1000 or 1 second
    //console.warn(`Total time: ${event.totalTime}`);
    
        // in our example, fromState is either open or closed
    //console.warn(`From: ${event.fromState}`);
    
        // in our example, toState either open or closed
    //console.warn(`To: ${event.toState}`);
    
        // the HTML element itself, the button in this case
    //console.warn(`Element: ${event.element}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
