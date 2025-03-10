import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { increment } from '../../counter.actions';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-increment',
  standalone: true,
  template: '<button mat-raised-button (click)="increment()">{{increase}}</button>',
  styleUrl: './increment.component.css',
  imports: [MatButtonModule]
})

export class IncrementComponent {
  increase = "+"
  count$!: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
}
