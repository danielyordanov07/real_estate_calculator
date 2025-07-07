import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RentCalculatorComponent } from '../rent-calculator/rent-calculator.component';
import { FlipCalculatorComponent } from '../flip-calculator/flip-calculator.component';
import { LoanCalculatorComponent } from "../loan-calculator/loan-calculator.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-tab-switcher',
  templateUrl: './main-tab.component.html',
  styleUrl: './main-tab.component.css',
  standalone: true,
  imports: [
    MatTabsModule,
    RentCalculatorComponent,
    FlipCalculatorComponent,
    LoanCalculatorComponent,
    TranslatePipe
]
})
export class MainTabComponent {

}
