import { Component } from '@angular/core';
import { IncrementModule } from './increment.module';

@Component({
  selector: 'app-increment',
  standalone: true,
  imports: [IncrementModule],
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css'
})
export class IncrementComponent {

}
