import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { calculateMonthlyPayment } from '../../../shared/utils';
import { CalculatorComponent } from "../calculator/calculator.component";
import { CalculatorInputModel } from '../../models/calculator-model/calculator-input';
import { CalculatorResultModel } from '../../models/calculator-model/calculator-result';

@Component({
  selector: 'loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalculatorComponent
  ],
})
export class LoanCalculatorComponent {
  public loanCalculatorInputProperties: CalculatorInputModel[] = [{
    placeholder: 0,
    label: 'loan_amount',
    value: null,
  }, {
    placeholder: 0,
    label: 'loan_term',
    value: null,
  }, {
    placeholder: 0,
    label: 'annual_interest_rate',
    value: null,
  }];

  public loanCalculatorOutputProperties: CalculatorResultModel[] = [{
    label: 'monthly_payment',
    placeholder: null,
    value: null,
  }, {
    label: 'total_payment',
    placeholder: null,
  }];

  public showResults: boolean = false;

  public calculateResults(): void {
    // const monthlyRate = (this.inputs.apr ?? 0) / 100 / 12;
    // const numberOfPayments = (this.inputs.loanTerm ?? 0) * 12;

    // // Monthly payment formula
    // const monthlyPayment = calculateMonthlyPayment(this.inputs.credit ?? 0, monthlyRate, numberOfPayments);
    // const totalPayment = monthlyPayment * numberOfPayments;

    // this.result.monthlyPayment = parseFloat(monthlyPayment.toFixed(2));
    // this.result.totalPayment = parseFloat(totalPayment.toFixed(2));

    const monthlyRate = (this.loanCalculatorInputProperties[2].value ?? 0) / 100 / 12;
    const numberOfPayments = (this.loanCalculatorInputProperties[1].value ?? 0) * 12;

    const monthlyPayment = calculateMonthlyPayment(this.loanCalculatorInputProperties[0].value ?? 0, monthlyRate, numberOfPayments);

    this.loanCalculatorOutputProperties[0].value = monthlyPayment;
  }
}
