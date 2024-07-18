import { Component } from "@angular/core";

@Component({
    selector: 'app-decrement',
    standalone: true,
    template: '<button>{{reduce}}</button>',
    styleUrl: '../CSS/decrement.component.css',
})

export class DecrementComponent {
    reduce = '-'
    // button does what? here
}
