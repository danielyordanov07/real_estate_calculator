import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalcSidebarState } from '../../app/models/service-models/calc-sidebar-state.model';

const INITIAL_STATE: CalcSidebarState = {
  commissionPercent: 2,
  taxesPercent: 7,
};

@Injectable({ providedIn: 'root' })
export class ConstantsService {
  private _state = new BehaviorSubject<CalcSidebarState>(INITIAL_STATE);
  state$ = this._state.asObservable();

  updateState(partial: Partial<CalcSidebarState>) {
    this._state.next({ ...this._state.value, ...partial });
  }

  getState(): CalcSidebarState {
    return this._state.value;
  }
}