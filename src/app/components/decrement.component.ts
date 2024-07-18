import { Component } from "@angular/core";

@Component({
    selector: 'app-decrement',
    standalone: true,
    template: '<button (click)="decreaseScore()">{{reduce}}</button>',
    styleUrl: '../CSS/decrement.component.css',
})

export class DecrementComponent {
    reduce = '-'
    // button does what? here
    decreaseScore() {
        // check that score is not zero, if (score !<= 0)
        // then decrease score logic here;
      }
}
