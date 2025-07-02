import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MainCalculatorComponent } from '../calculator/calculator.component';
import { FlipCalculatorComponent } from '../flip-calculator/flip-calculator.component';
import { LoanCalculatorComponent } from "../loan-calculator/loan-calculator.component";

@Component({
  selector: 'app-tab-switcher',
  templateUrl: './main-tab.component.html',
  styleUrl: './main-tab.component.css',
  standalone: true,
  imports: [
    MatTabsModule,
    MainCalculatorComponent,
    FlipCalculatorComponent,
    LoanCalculatorComponent
]
})
export class MainTabComponent {

}
