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
      label: 'repayment_fee',
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
    // const purchasePrice = Number(this.inputs.purchasePrice) || 0;
    // const repairCosts = Number(this.inputs.repairCosts) || 0;
    // const salePrice = Number(this.inputs.salePrice) || 0;
    // const repaymentFee = Number(this.inputs.repaymentFee) || 0;
    // const profitTaxPercent = Number(this.inputs.profitTaxPercent) || 0;

    // const taxes = purchasePrice * (TAXES_PERCENT / 100);
    // const totalCost = purchasePrice + repairCosts + taxes;
    // const commission = salePrice * (COMMISSION_PERCENT / 100);

    // const grossProfit = salePrice - repaymentFee - totalCost - commission;
    // const profitTax = grossProfit > 0 ? grossProfit * (profitTaxPercent / 100) : 0;
    // const netProfitEUR = grossProfit - profitTax;

    // const netProfitBGN = netProfitEUR * EUR_TO_BGN;

    // this.results = {
    //   taxes,
    //   totalCost,
    //   profitTax,
    //   commission,
    //   profitEUR: netProfitEUR,
    //   profitBGN: netProfitBGN
    // };

    // taxes
    this.flipCalculatorOutputProperties[0].value = (this.flipCalculatorInputProperties[0].value ?? 0) * (TAXES_PERCENT / 100);

    // total cost
    this.flipCalculatorOutputProperties[1].value = (this.flipCalculatorInputProperties[0].value ?? 0) + 
      (this.flipCalculatorInputProperties[1].value ?? 0) + this.flipCalculatorOutputProperties[0].value;

    // commission
    this.flipCalculatorOutputProperties[3].value = (this.flipCalculatorInputProperties[2].value ?? 0) * (COMMISSION_PERCENT / 100);

    // gross profit
    // EUR
    this.flipCalculatorOutputProperties[4].value = this.flipCalculatorOutputProperties[2].value ?? 0 > 0 
      ? this.flipCalculatorOutputProperties[2].value ?? 0 * (this.flipCalculatorInputProperties[4].value ?? 0) / 100 : 0;
    
    // BGN
    this.flipCalculatorOutputProperties[5].value = this.flipCalculatorOutputProperties[4].value * EUR_TO_BGN;
  }
}