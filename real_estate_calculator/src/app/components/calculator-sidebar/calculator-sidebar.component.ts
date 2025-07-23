import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { COMMISSION_PERCENT, TAXES_PERCENT } from '../../../shared/consts';
import { CalcSidebarConstItem } from '../../models/calc-sidebar-model';
import { TranslatePipe } from '@ngx-translate/core';
import { ExchangeRateService } from '../../../shared/services/exchange-rate.service';
import { MatButtonModule } from '@angular/material/button';
import { ConstantsService } from '../../../shared/services/constants.service';
import { CalcSidebarState } from '../../models/service-models/calc-sidebar-state.model';

@Component({
  selector: 'calculator-sidebar',
  standalone: true,
  templateUrl: './calculator-sidebar.component.html',
  styleUrl: './calculator-sidebar.component.scss',
  imports: [
    CommonModule,
    TranslatePipe,
    MatButtonModule,
    FormsModule
  ]
})
export class CalculatorSidebarComponent implements OnInit, OnDestroy {
  public commissionPercentValue = COMMISSION_PERCENT;
  public taxesPercentValue = TAXES_PERCENT;

  public consts: { [key: string]: CalcSidebarConstItem };

  public objectKeys = Object.keys;

  state!: CalcSidebarState;
  private stateSub!: Subscription;

  constructor(
    private exchangeRateService: ExchangeRateService,
    private constantsService: ConstantsService // inject singleton
  ) {
    this.consts = {
      commissionPercent: {
        label: 'sale_commission%',
        value: this.commissionPercentValue,
        disabled: false
      },
      taxesPercent: {
        label: 'taxes%',
        value: this.taxesPercentValue,
        disabled: false
      },
      eurToBgn: {
        label: 'eur to bgn',
        value: this.exchangeRateService.eurToBgn,
        disabled: true
      }
    };
  }

  ngOnInit() {
    this.stateSub = this.constantsService.state$.subscribe(state => {
      this.consts['commissionPercent'].value = state.commissionPercent;
      this.consts['taxesPercent'].value = state.taxesPercent;
    });
  }

  ngOnDestroy() {
    this.stateSub?.unsubscribe();
  }

  saveConstants(): void {
    this.constantsService.updateState({
      commissionPercent: this.consts['commissionPercent'].value,
      taxesPercent: this.consts['taxesPercent'].value,
    });
    console.log('Constants should be saved:', this.consts);
  }

  onCommissionChange(value: number) {
    this.constantsService.updateState({ commissionPercent: value });
  }

  onTaxesChange(value: number) {
    this.constantsService.updateState({ taxesPercent: value });
  }
}