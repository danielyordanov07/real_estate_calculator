import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { COMMISSION_PERCENT, EUR_TO_BGN, TAXES_PERCENT } from '../../../shared/consts';
import { CalcSidebarConstItem } from '../../models/calc-sidebar-model';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { ConstantsService } from '../../../shared/services/constants.service';

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

  private _stateSub!: Subscription;

  constructor(
    private readonly _constantsService: ConstantsService
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
        value: EUR_TO_BGN,
        disabled: true
      }
    };
  }

  public ngOnInit(): void {
    this._stateSub = this._constantsService.state$.subscribe(state => {
      this.consts['commissionPercent'].value = state.saleCommissionPercent;
      this.consts['taxesPercent'].value = state.taxesPercent;
    });
  }

  public ngOnDestroy(): void {
    this._stateSub?.unsubscribe();
  }

  public saveConstants(): void {
    this._constantsService.updateState({
      saleCommissionPercent: this.consts['commissionPercent'].value,
      taxesPercent: this.consts['taxesPercent'].value,
    });
  }

  public onCommissionChange(value: number): void {
    this._constantsService.updateState({ saleCommissionPercent: value });
  }

  public onTaxesChange(value: number): void {
    this._constantsService.updateState({ taxesPercent: value });
  }
}