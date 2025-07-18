import { Component } from '@angular/core';

import { COMMISSION_PERCENT, TAXES_PERCENT, DEFAULT_LANGUAGE } from '../../../shared/consts';
import { CalcSidebarConstItem } from '../../models/calc-sidebar-model';

import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ExchangeRateService } from '../../../shared/services/exchange-rate.service';

@Component({
  selector: 'calculator-sidebar',
  standalone: true,
  templateUrl: './calculator-sidebar.component.html',
  styleUrl: './calculator-sidebar.component.scss',
  imports: [
    CommonModule,
    TranslatePipe
  ]
})
export class CalculatorSidebarComponent {
  public consts: CalcSidebarConstItem[];

  constructor(private exchangeRateService: ExchangeRateService) {
    this.consts = [
      {
        label: 'Commission Percent',
        value: COMMISSION_PERCENT,
        disabled: false
      },
      {
        label: 'Taxes Percent',
        value: TAXES_PERCENT,
        disabled: false
      },
      {
        label: 'EUR to BGN',
        value: this.exchangeRateService.eurToBgn,
        disabled: true
      }
    ];
  }
}