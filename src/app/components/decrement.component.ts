import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'decrement-number',
    template: '<button>{{reduce}}</button>',
    styleUrl: '../CSS/decrement.component.css',
})

export class DecrementComponent {
    reduce = '-'
    // button does what? here
}
