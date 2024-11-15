import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalctulatorBasicComponent } from './components/calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalctulatorBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real_estate_calculator';
}