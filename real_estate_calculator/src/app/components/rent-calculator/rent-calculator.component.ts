import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { calculateMonthlyPayment } from '../../../shared/utils';
import { CalculatorComponent } from "../calculator/calculator.component";
import { CalculatorInputModel } from '../../models/calculator-model/calculator-input';
import { CalculatorResultModel } from '../../models/calculator-model/calculator-result';

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

  public rentCalculatorInputProperties: CalculatorInputModel[] = [{
    placeholder: 0,
    label: 'sale_price',
    value: null,
  }, {
    placeholder: 0,
    label: 'repair_costs',
    value: null,
  }, {
    placeholder: 0,
    label: 'apr_percent',
    value: null,
  }, {
    placeholder: 0,
    label: 'loan_years',
    value: null,
  }];

  public rentCalculatorOutputProperties: CalculatorResultModel[] = [{
    label: 'purchase_costs',
    placeholder: null,
    value: null,
  }, {
    label: 'credit',
    placeholder: null,
    value: null,
  }, {
    label: 'monthly_payment',
    placeholder: null,
    value: null,
  }];

  public calculateResults(): void {
    // this.results.purchaseCosts = (this.inputs.salePrice ?? 0) * 1.07;
    // this.results.credit = this.results.purchaseCosts + (this.inputs.repairCosts ?? 0);

    // this.results.monthlyRate = ((this.inputs.apr ?? 0) / 100) / 12;;
    // this.results.months = (this.inputs.loanYears ?? 0) * 12;

    // this.results.monthlyPayment =
    //   calculateMonthlyPayment(this.results.credit, this.results.monthlyRate, this.results.months);

    this.rentCalculatorOutputProperties[0].value = (this.rentCalculatorInputProperties[0].value ?? 0) * 1.07;
    this.rentCalculatorOutputProperties[1].value = this.rentCalculatorOutputProperties[0].value + (this.rentCalculatorInputProperties[1].value ?? 0);

    const monthlyRate = ((this.rentCalculatorInputProperties[2].value ?? 0) / 100) / 12;
    const months = (this.rentCalculatorInputProperties[3].value ?? 0) * 12;
    this.rentCalculatorOutputProperties[2].value =
      calculateMonthlyPayment(this.rentCalculatorOutputProperties[1].value, monthlyRate, months);
  }
}
