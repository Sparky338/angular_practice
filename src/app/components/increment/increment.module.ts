import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IncrementComponent
  ],
  exports: [IncrementComponent]
})
export class IncrementModule { }
