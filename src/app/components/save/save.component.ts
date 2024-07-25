import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from '../../counter.actions';
import { MatButtonModule } from '@angular/material/button';
import { storeScore } from '../../../main';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-save',
  standalone: true,
  // template: '<button mat-raised-button (click)="storeScore(score, currentDateTime)">Save Count</button>',
  template: '<button mat-raised-button >Save Count</button>',
  styleUrl: './save.component.css',
  imports: [MatButtonModule],
})
export class SaveComponent {
  count$!: Observable<number>;
  score: number = 0;
  // currentDateTime: any = new Date()
  // generalService = inject(GeneralService);
  // storeScore = storeScore

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  //   this.storeScore(this.score, this.currentDateTime)
  //   // this.generalService.onButtonClick.subscribe(() => {
  //   //   this.storeScore(this.score, this.currentDateTime)
  //   // })

    this.count$.subscribe({
      next: (value) => {
        this.score = value;
      }
    });
  }

  reset() {
    this.store.dispatch(reset());
  }

  // storeScore(score: number, currentDateTime: any) {

  // }
}
