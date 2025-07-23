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
export class RentCalculatorComponent implements OnDestroy {
  rentCalculatorInputProperties: CalculatorInputModel[] = [
    { placeholder: 0, label: 'purchase_price', value: null },
    { placeholder: 0, label: 'repair_costs', value: null },
    { placeholder: 0, label: 'apr_percent', value: null },
    { placeholder: 0, label: 'loan_years', value: null }
  ];

  rentCalculatorOutputProperties: CalculatorResultModel[] = [
    { label: 'purchase_costs', placeholder: null, value: null },
    { label: 'credit', placeholder: null, value: null },
    { label: 'monthly_payment', placeholder: null, value: null }
  ];

  commissionPercent = 2;
  taxesPercent = 7;
  private constantsSub: Subscription;

  constructor(private constantsService: ConstantsService) {
    this.constantsSub = this.constantsService.state$.subscribe(state => {
      this.commissionPercent = state.commissionPercent;
      this.taxesPercent = state.taxesPercent;
    });
  }

  calculateResults(): void {
    const purchase = this.rentCalculatorInputProperties[0].value ?? 0;
    const repair = this.rentCalculatorInputProperties[1].value ?? 0;
    const apr = this.rentCalculatorInputProperties[2].value ?? 0;
    const years = this.rentCalculatorInputProperties[3].value ?? 0;

    const purchaseCosts = purchase * (1 + this.taxesPercent / 100);
    const credit = purchaseCosts + repair;
    const monthlyRate = (apr / 100) / 12;
    const months = years * 12;
    const monthlyPayment = calculateMonthlyPayment(credit, monthlyRate, months);

    this.rentCalculatorOutputProperties[0].value = purchaseCosts;
    this.rentCalculatorOutputProperties[1].value = credit;
    this.rentCalculatorOutputProperties[2].value = monthlyPayment;
  }

  ngOnDestroy() {
    this.constantsSub.unsubscribe();
  }
}
