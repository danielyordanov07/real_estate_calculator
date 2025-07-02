import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainCalculatorInputModel } from '../../models/main-calculator-model/main-calculator-input';
import { MainCalculatorResultModel } from '../../models/main-calculator-model/main-calculator-result';
import { calculateMonthlyPayment } from '../../../shared/utils';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class MainCalculatorComponent {
  public inputs: MainCalculatorInputModel = {
    salePrice: null,
    repairCosts: null,
    apr: null,
    loanYears: null
  };
  public results: MainCalculatorResultModel = {
    purchaseCosts: 0,
    credit: 0,
    monthlyRate: 0,
    months: 0,
    monthlyPayment: 0
  };

  public calculateResults(): void {
    this.results.purchaseCosts = (this.inputs.salePrice ?? 0) * 1.07;
    this.results.credit = this.results.purchaseCosts + (this.inputs.repairCosts ?? 0);

    this.results.monthlyRate = ((this.inputs.apr ?? 0) / 100) / 12;;
    this.results.months = (this.inputs.loanYears ?? 0) * 12;

    this.results.monthlyPayment =
      calculateMonthlyPayment(this.results.credit, this.results.monthlyRate, this.results.months);
  }
}
