import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlipCalculatorInputModel } from "../../models/flip-calculator-model/flip-calculator-inputs"
import { FlipCalculatorResultModel } from '../../models/flip-calculator-model/flip-calculator-result';

@Component({
  selector: 'flip-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './flip-calculator.component.html',
  styleUrl: './flip-calculator.component.css'
})
export class FlipCalculatorComponent {
  public inputs: FlipCalculatorInputModel = {
    purchasePrice: null,
    repairCosts: null,
    salePrice: null,
    repaymentFee: null,
    profitTaxPercent: null
  };

  public results: FlipCalculatorResultModel = {
    taxes: 0,
    totalCost: 0,
    profitTax: 0,
    commission: 0,
    profitEUR: 0,
    profitBGN: 0
  };

  private readonly COMMISSION_PERCENT = 2;     // 2%
  private readonly TAXES_PERCENT = 7;          // 7%
  private readonly EUR_TO_BGN = 1.95583;       // Fixed exchange rate

  public calculateResults() {
    const purchasePrice = Number(this.inputs.purchasePrice) || 0;
    const repairCosts = Number(this.inputs.repairCosts) || 0;
    const salePrice = Number(this.inputs.salePrice) || 0;
    const repaymentFee = Number(this.inputs.repaymentFee) || 0;
    const profitTaxPercent = Number(this.inputs.profitTaxPercent) || 0;

    // Такси = Покупна цена * 0.07
    const taxes = purchasePrice * (this.TAXES_PERCENT / 100);

    // Себестойност = Покупна цена + Ремонт + Такси
    const totalCost = purchasePrice + repairCosts + taxes;

    // Комисионна = Продажна цена * 0.02
    const commission = salePrice * (this.COMMISSION_PERCENT / 100);

    // Печалба - EUR = Продажна цена - Такса погасяване - Данък печалба - Себестойност - Комисионна
    const grossProfit = salePrice - repaymentFee - totalCost - commission;
    const profitTax = grossProfit > 0 ? grossProfit * (profitTaxPercent / 100) : 0;
    const netProfitEUR = grossProfit - profitTax;

    // Печалба - лв = Печалба EUR * 1.95583
    const netProfitBGN = netProfitEUR * this.EUR_TO_BGN;

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