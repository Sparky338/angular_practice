import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { decrement } from "../counter.actions";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-decrement',
    standalone: true,
    template: '<button mat-raised-button  (click)="decrement()">{{reduce}}</button>',
    styleUrl: '../CSS/decrement.component.css',
    imports: [MatButtonModule]
})

export class DecrementComponent {
    reduce = '-';
    count$!: Observable<number>;

    constructor(private store: Store<{count: number}>) {
        this.count$ = store.select('count');
    }

    decrement() {
        this.store.dispatch(decrement());
    }
}
