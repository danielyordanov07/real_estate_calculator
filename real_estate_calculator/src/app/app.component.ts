import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCalculatorComponent } from './components/calculator/calculator.component';
import { MainTabComponent } from "./tab-switcher/main-tab.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainCalculatorComponent, MainTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real_estate_calculator';
}