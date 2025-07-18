import { Component } from '@angular/core';

import { COMMISSION_PERCENT, TAXES_PERCENT, EUR_TO_BGN, DEFAULT_LANGUAGE } from '../../../shared/consts';
import { CalcSidebarConstItem } from '../../models/calc-sidebar-model';

import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

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
  public _consts: CalcSidebarConstItem[] = [{
      label: 'Commission Percent',
      value: COMMISSION_PERCENT
    },{
      label: 'Taxes Percent',
      value: TAXES_PERCENT
    },{
      label: 'EUR to BGN',
      value: EUR_TO_BGN
    }
  ];

}