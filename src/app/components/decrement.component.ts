import { Component } from "@angular/core";

@Component({
    selector: 'decrement-number',
    template: '<button>{{reduce}}</button>',
    styleUrl: '../CSS/decrement.css'
})

export class DecrementComponent {
    reduce = '-'
}
