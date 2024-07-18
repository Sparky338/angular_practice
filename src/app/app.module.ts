import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { DecrementComponent } from './components/decrement.component';
import { IncrementComponent } from './components/increment/increment.component';

@NgModule({
  declarations: [],
  imports: [
    // AppComponent,
    // BrowserModule,
    // IncrementComponent,
    // DecrementComponent,
    StoreModule.forRoot({count: counterReducer}),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
