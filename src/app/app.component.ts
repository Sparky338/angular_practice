import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { IncrementComponent } from './components/increment/increment.component';
import { CounterComponent } from './components/counter/counter.component';
import { DecrementComponent } from './components/decrement.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IncrementComponent,
    DecrementComponent,
    CounterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Gametime Hero score counter';
  count$!: Observable<number>;
  score: number = 0;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
    this.count$.subscribe({
      next: (value) => {
        this.score = value;
      }
    });
  }
}
