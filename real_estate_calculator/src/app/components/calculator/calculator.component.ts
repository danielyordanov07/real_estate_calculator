import { Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class MainCalculatorComponent implements OnInit {

  inputs: { salePrice: number; repairCosts: number; apr: number; loanYears: number } = {
    salePrice: 0,
    repairCosts: 0,
    apr: 0,
    loanYears: 0,
  };

  results: { purchaseCosts: number; credit: number; monthlyRate: number; months: number, monthlyPayment: number } = {
    purchaseCosts: 0,
    credit: 0,
    monthlyRate: 0,
    months: 0,
    monthlyPayment: 0,
  };

  public ngOnInit(): void {
    console.log('Initialized');
  }

  public calculateResults(): void {
    this.results.purchaseCosts = this.inputs.salePrice * 1.07;
    this.results.credit = this.results.purchaseCosts + this.inputs.repairCosts;
    
    this.results.monthlyRate = (this.inputs.apr / 100) / 12;;
    this.results.months = this.inputs.loanYears * 12;

    if (this.results.monthlyRate > 0) {
      this.results.monthlyPayment = this.results.credit * 
        (this.results.monthlyRate * Math.pow(1 + this.results.monthlyRate, this.results.months)) /
        (Math.pow(1 + this.results.monthlyRate, this.results.months) - 1);
    } else {
      this.results.monthlyPayment = this.results.credit / this.results.months;
    }

  }

}

