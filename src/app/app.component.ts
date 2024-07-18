import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NgModuleModule } from './app.module';
import { IncrementComponent } from './components/increment/increment.component';
import { IncrementModule } from './components/increment/increment.module';
import { CounterComponent } from "./components/counter/counter.component";
import { DecrementComponent } from './components/decrement.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IncrementComponent, DecrementComponent, IncrementModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_practice';
  IncrementComponent = IncrementComponent;
  IncrementModule = IncrementModule;
  // NgModuleModule = NgModuleModule;
}
