import { Component } from '@angular/core';
import { IncrementModule } from './increment.module';

@Component({
  selector: 'app-increment',
  standalone: true,
  imports: [],
  template: '<button>{{increase}}</button>',
  styleUrl: './increment.component.css'
})
export class IncrementComponent {
  increase = "+"
  //button does what? here
}
