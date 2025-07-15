import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from "../calculator/calculator.component";
import { COMMISSION_PERCENT, EUR_TO_BGN, TAXES_PERCENT } from '../../../shared/consts';
import { CalculatorInputModel } from '../../models/calculator-model/calculator-input';
import { CalculatorResultModel } from '../../models/calculator-model/calculator-result';

@Component({
  selector: 'flip-calculator',
  templateUrl: './flip-calculator.component.html',
  styleUrl: './flip-calculator.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalculatorComponent
  ]
})
export class FlipCalculatorComponent {

  public flipCalculatorInputProperties: CalculatorInputModel[] = [{
      placeholder: 0,
      label: 'purchase_price',
      value: null,
    },
    {
      placeholder: 0,
      label: 'repair_costs',
      value: null,
    },
    {
      placeholder: 0,
      label: 'sale_price',
      value: null,
    },
    {
      placeholder: 0,
      label: 'profit_tax_percent',
      value: null,
    }
  ];

  public flipCalculatorOutputProperties: CalculatorResultModel[] = [{
      label: 'taxes',
      placeholder: null,
      value: null,
    },
    {
      label: 'total_cost',
      placeholder: null,
      value: null,
    },
    {
      label: 'profit_tax',
      placeholder: null,
      value: null,
    },
    {
      label: 'commission',
      placeholder: null,
      value: null,
    },
    {
      label: 'profit_eur',
      placeholder: null,
      value: null,
    },
    {
      label: 'profit_bgn',
      placeholder: null,
      value: null,
    }
  ];

  public calculateResults(): void {
    const purchasePrice = Number(this.flipCalculatorInputProperties[0].value) || 0;
    const repairCosts = Number(this.flipCalculatorInputProperties[1].value) || 0;
    const salePrice = Number(this.flipCalculatorInputProperties[2].value) || 0;
    const profitTaxPercent = Number(this.flipCalculatorInputProperties[3].value) || 0;

    // taxes
    const taxes = purchasePrice * (TAXES_PERCENT / 100);
    this.flipCalculatorOutputProperties[0].value = taxes;

    // total cost
    const totalCost = purchasePrice + repairCosts + taxes;
    this.flipCalculatorOutputProperties[1].value = totalCost;

    // commission
    const commission = salePrice * (COMMISSION_PERCENT / 100);
    this.flipCalculatorOutputProperties[3].value = commission;

    // credit (purchase + repair + taxes)
    const credit = totalCost;

    // repayment fee (1% of credit)
    const repaymentFee = credit * 0.01;

    // gross profit
    const grossProfit = salePrice - repaymentFee - totalCost - commission;

    // profit tax
    const profitTax = grossProfit > 0 ? grossProfit * (profitTaxPercent / 100) : 0;
    this.flipCalculatorOutputProperties[2].value = profitTax;

    // net profit EUR
    const netProfitEUR = grossProfit - profitTax;
    this.flipCalculatorOutputProperties[4].value = netProfitEUR;

    // net profit BGN
    const netProfitBGN = netProfitEUR * EUR_TO_BGN;
    this.flipCalculatorOutputProperties[5].value = netProfitBGN;
  }
}