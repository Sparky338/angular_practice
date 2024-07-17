import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModuleModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular_practice';
}
