// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DecrementComponent } from './components/decrement.component';
import { IncrementModule } from './components/increment/increment.module';
import { IncrementComponent } from './components/increment/increment.component';

@NgModule({
  declarations: [
    DecrementComponent,
  ],
  imports: [
    // BrowserModule,
    // IncrementModule
    IncrementComponent
  ],
  providers:[],
  bootstrap:[]
})
export class NgModuleModule { }
