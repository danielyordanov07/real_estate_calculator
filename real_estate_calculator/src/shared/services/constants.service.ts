import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalcSidebarState } from '../../app/models/service-models/calc-sidebar-state.model';

const INITIAL_STATE: CalcSidebarState = {
  saleCommissionPercent: 2,
  taxesPercent: 7
};

@Injectable({ providedIn: 'root' })
export class ConstantsService {
  private _state = new BehaviorSubject<CalcSidebarState>(INITIAL_STATE);
  state$ = this._state.asObservable();

  public updateState(partial: Partial<CalcSidebarState>): void {
    this._state.next({
      ...this._state.value,
      ...partial
    });
  }

  public getState(): CalcSidebarState {
    return this._state.value;
  }
}