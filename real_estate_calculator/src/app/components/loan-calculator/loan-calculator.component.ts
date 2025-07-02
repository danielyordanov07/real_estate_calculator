import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanCalculatorInputModel } from '../../models/loan-calculator-model/loan-calculator-input';
import { LoanCalculatorResultModel } from '../../models/loan-calculator-model/loan-calculator-result';

@Component({
  selector: 'loan-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.css'
})
export class LoanCalculatorComponent {
  public inputs: LoanCalculatorInputModel = {
    credit: null,
    loanTerm: null,
    APR: null,
  };
  public result: LoanCalculatorResultModel = {
    monthlyPayment: null,
    totalPayment: null, 
  };

  public calculateLoan() {
    const monthlyRate = (this.inputs.APR ?? 0) / 100 / 12;
    const numberOfPayments = (this.inputs.loanTerm ?? 0) * 12;

    // Monthly payment formula
    const monthlyPayment = ((this.inputs.credit ?? 0) * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;

    this.result.monthlyPayment = parseFloat(monthlyPayment.toFixed(2));
    this.result.totalPayment = parseFloat(totalPayment.toFixed(2));
  }
}
