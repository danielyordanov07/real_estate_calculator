import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentCalculatorInputModel } from '../../models/rent-calculator-model/rent-calculator-input';
import { RentCalculatorResultModel } from '../../models/rent-calculator-model/rent-calculator-result';
import { calculateMonthlyPayment } from '../../../shared/utils';
import { CalculatorComponent } from "../calculator/calculator.component";

@Component({
  selector: 'rent-calculator',
  templateUrl: './rent-calculator.component.html',
  styleUrl: './rent-calculator.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CalculatorComponent
]
})
export class RentCalculatorComponent {
  public inputs: RentCalculatorInputModel = {
    salePrice: null,
    repairCosts: null,
    apr: null,
    loanYears: null
  };
  public results: RentCalculatorResultModel = {
    purchaseCosts: 0,
    credit: 0,
    monthlyRate: 0,
    months: 0,
    monthlyPayment: 0
  };
  public showResults: boolean = false;

  public calculateResults(value: number): void {
    console.log('Calculating results with value:', value);
    this.showResults = true;

    this.results.purchaseCosts = (this.inputs.salePrice ?? 0) * 1.07;
    this.results.credit = this.results.purchaseCosts + (this.inputs.repairCosts ?? 0);

    this.results.monthlyRate = ((this.inputs.apr ?? 0) / 100) / 12;;
    this.results.months = (this.inputs.loanYears ?? 0) * 12;

    this.results.monthlyPayment =
      calculateMonthlyPayment(this.results.credit, this.results.monthlyRate, this.results.months);
  }
}
