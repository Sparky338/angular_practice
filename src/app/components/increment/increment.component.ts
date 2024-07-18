import { Component, Directive } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-increment',
  standalone: true,
  imports: [AppComponent],
  template: '<button (click)="increaseScore()">{{increase}}</button>',
  styleUrl: './increment.component.css'
})
export class IncrementComponent {
  increase = "+"
  //button does what? here
  increaseScore() {
    // increase score logic here;
  }

}
