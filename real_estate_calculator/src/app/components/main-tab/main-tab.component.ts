import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MainCalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-tab-switcher',
  templateUrl: './main-tab.component.html',
  styleUrl: './main-tab.component.css',
  standalone: true,
  imports: [
    MatTabsModule,
    MainCalculatorComponent
  ]
})
export class MainTabComponent {

}
