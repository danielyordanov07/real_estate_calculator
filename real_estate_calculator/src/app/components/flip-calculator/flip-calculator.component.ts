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
    profitTax: null
  };

  public results: FlipCalculatorResultModel = {
    taxes: 0,
    totalCost: 0,
    commission: 0,
    profitEUR: 0,
    profitBGN: 0
  };
 
  public calculateResults() {
    const purchase = (this.inputs.purchasePrice ?? 0) || 0;
    const repair = (this.inputs.repairCosts ?? 0) || 0;
    const sale = (this.inputs.salePrice ?? 0) || 0;
    const repay = (this.inputs.repaymentFee ?? 0) || 0;
    const taxProfit = (this.inputs.profitTax ?? 0) || 0;

    const taxes = purchase * 0.07;
    const totalCost = purchase + repair + taxes;
    const commission = sale * 0.02;
    const profitEUR = sale - repay - taxProfit - totalCost - commission;
    const profitBGN = profitEUR * 1.95583;

    this.results = {
      taxes,
      totalCost,
      commission,
      profitEUR,
      profitBGN
    };
  }
}
