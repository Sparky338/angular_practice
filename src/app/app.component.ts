import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { IncrementComponent } from './components/increment/increment.component';
import { IncrementModule } from './components/increment/increment.module';
import { CounterComponent } from './components/counter/counter.component';
import { DecrementComponent } from './components/decrement.component';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IncrementComponent,
    DecrementComponent,
    // IncrementModule,
    CounterComponent,
    // AppModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Gametime Hero score counter';
  count$!: Observable<number>;
  score = this.count$;
  // IncrementComponent = IncrementComponent;
  // IncrementModule = IncrementModule;
  // NgModuleModule = NgModuleModule;
}
