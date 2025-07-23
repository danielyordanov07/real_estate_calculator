import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { calculateMonthlyPayment } from '../../../shared/utils';
import { CalculatorComponent } from "../calculator/calculator.component";
import { CalculatorInputModel } from '../../models/calculator-model/calculator-input';
import { CalculatorResultModel } from '../../models/calculator-model/calculator-result';
import { ConstantsService } from '../../../shared/services/constants.service';
import { Subscription } from 'rxjs';

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
export class LoanCalculatorComponent implements OnDestroy {
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
    value: null,
  }];

  public showResults: boolean = false;

  private constantsSub: Subscription;
  public commissionPercent: number = 2;
  public taxesPercent: number = 7;

  constructor(private constantsService: ConstantsService) {
    this.constantsSub = this.constantsService.state$.subscribe(state => {
      this.commissionPercent = state.commissionPercent;
      this.taxesPercent = state.taxesPercent;
    });
  }

  public calculateResults(): void {
    const monthlyRate = (this.loanCalculatorInputProperties[2].value ?? 0) / 100 / 12;
    const numberOfPayments = (this.loanCalculatorInputProperties[1].value ?? 0) * 12;

    const monthlyPayment = calculateMonthlyPayment(this.loanCalculatorInputProperties[0].value ?? 0, monthlyRate, numberOfPayments);

    this.loanCalculatorOutputProperties[0].value = monthlyPayment;
    this.loanCalculatorOutputProperties[1].value = Number((monthlyPayment * numberOfPayments).toFixed(2));
  }

  ngOnDestroy() {
    this.constantsSub.unsubscribe();
  }
}
