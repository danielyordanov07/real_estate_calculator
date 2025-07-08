import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from "../calculator/calculator.component";
import { COMMISSION_PERCENT, EUR_TO_BGN, TAXES_PERCENT } from '../../../shared/consts';

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
  public inputs = {
    purchasePrice: null,
    repairCosts: null,
    salePrice: null,
    repaymentFee: null,
    profitTaxPercent: null
  };

  public results = {
    taxes: 0,
    totalCost: 0,
    profitTax: 0,
    commission: 0,
    profitEUR: 0,
    profitBGN: 0
  };

  public showResults: boolean = false;

  public calculateResults(_: any): void {
    this.showResults = true;

    const purchasePrice = Number(this.inputs.purchasePrice) || 0;
    const repairCosts = Number(this.inputs.repairCosts) || 0;
    const salePrice = Number(this.inputs.salePrice) || 0;
    const repaymentFee = Number(this.inputs.repaymentFee) || 0;
    const profitTaxPercent = Number(this.inputs.profitTaxPercent) || 0;

    const taxes = purchasePrice * (TAXES_PERCENT / 100);
    const totalCost = purchasePrice + repairCosts + taxes;
    const commission = salePrice * (COMMISSION_PERCENT / 100);

    const grossProfit = salePrice - repaymentFee - totalCost - commission;
    const profitTax = grossProfit > 0 ? grossProfit * (profitTaxPercent / 100) : 0;
    const netProfitEUR = grossProfit - profitTax;

    const netProfitBGN = netProfitEUR * EUR_TO_BGN;

    this.results = {
      taxes,
      totalCost,
      profitTax,
      commission,
      profitEUR: netProfitEUR,
      profitBGN: netProfitBGN
    };
  }
}