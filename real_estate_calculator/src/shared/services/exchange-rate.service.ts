import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiUrl = 'https://api.exchangerate.host/latest?base=EUR&symbols=BGN';
  private _eurToBgn = 1.95583; // Fallback value

  constructor(private http: HttpClient) {}

  get eurToBgn(): number {
    return this._eurToBgn;
  }

  fetchAndSetEurToBgnRate(): void {
    this.http.get<any>(this.apiUrl).pipe(
      tap(response => {
        if (response?.rates?.BGN) {
          this._eurToBgn = response.rates.BGN;
          console.log('[ExchangeRateService] EUR_TO_BGN updated to', this._eurToBgn);
        }
      }),
      catchError(error => {
        console.warn('[ExchangeRateService] Failed to fetch rate, using fallback.', error);
        return of(null);
      })
    ).subscribe();
  }

  fetchAndSetEurToBgnRatePeriodically(intervalMs: number = 3600000): void {
    this.fetchAndSetEurToBgnRate();
    setInterval(() => this.fetchAndSetEurToBgnRate(), intervalMs);
  }
}
