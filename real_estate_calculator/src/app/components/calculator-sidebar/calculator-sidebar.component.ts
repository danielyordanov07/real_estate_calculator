import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COMMISSION_PERCENT, TAXES_PERCENT } from '../../../shared/consts';
import { CalcSidebarConstItem } from '../../models/calc-sidebar-model';
import { TranslatePipe } from '@ngx-translate/core';
import { ExchangeRateService } from '../../../shared/services/exchange-rate.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'calculator-sidebar',
  standalone: true,
  templateUrl: './calculator-sidebar.component.html',
  styleUrl: './calculator-sidebar.component.scss',
  imports: [
    CommonModule,
    TranslatePipe,
    MatButtonModule
  ]
})
export class CalculatorSidebarComponent {
  public consts: { [key: string]: CalcSidebarConstItem };

  public objectKeys = Object.keys;

  public getLabel(key: string): string {
    return this.consts[key].label;
  }

  constructor(private exchangeRateService: ExchangeRateService) {
    this.consts = {
      commissionPercent: {
        label: 'Commission (%)',
        value: COMMISSION_PERCENT,
        disabled: true
      },
      taxesPercent: {
        label: 'Taxes (%)',
        value: TAXES_PERCENT,
        disabled: true
      },
      eurToBgn: {
        label: 'EUR to BGN',
        value: this.exchangeRateService.eurToBgn,
        disabled: true
      }
    };
  }

  saveConstants(): void {
    

    console.log('Constants should be saved:', this.consts);
  }
}