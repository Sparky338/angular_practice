import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { decrement } from "../counter.actions";

@Component({
    selector: 'app-decrement',
    standalone: true,
    template: '<button (click)="decrement()">{{reduce}}</button>',
    styleUrl: '../CSS/decrement.component.css',
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
