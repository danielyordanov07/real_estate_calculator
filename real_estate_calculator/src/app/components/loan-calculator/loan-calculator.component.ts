import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanCalculatorInputModel } from '../../models/loan-calculator-model/loan-calculator-input';
import { LoanCalculatorResultModel } from '../../models/loan-calculator-model/loan-calculator-result';
import { calculateMonthlyPayment } from '../../../shared/utils';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslatePipe
  ],
})
export class LoanCalculatorComponent {
  public inputs: LoanCalculatorInputModel = {
    credit: null,
    loanTerm: null,
    apr: null
  };
  public result: LoanCalculatorResultModel = {
    monthlyPayment: null,
    totalPayment: null
  };

  public calculateLoan(): void {
    const monthlyRate = (this.inputs.apr ?? 0) / 100 / 12;
    const numberOfPayments = (this.inputs.loanTerm ?? 0) * 12;

    // Monthly payment formula
    const monthlyPayment = calculateMonthlyPayment(this.inputs.credit ?? 0, monthlyRate, numberOfPayments);
    const totalPayment = monthlyPayment * numberOfPayments;

    this.result.monthlyPayment = parseFloat(monthlyPayment.toFixed(2));
    this.result.totalPayment = parseFloat(totalPayment.toFixed(2));
  }
}
