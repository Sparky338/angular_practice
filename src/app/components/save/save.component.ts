import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from '../../counter.actions';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-save',
  standalone: true,
  template: '<button mat-raised-button (click)="save()">Save Count</button>',
  styleUrl: './save.component.css',
  imports: [MatButtonModule],
})
export class SaveComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }

  reset() {
    this.store.dispatch(reset());
  }
}
