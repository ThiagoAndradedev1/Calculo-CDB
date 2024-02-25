import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CdbResult } from '../schemas';
import { calculateDiscountedValueCdb } from '../../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class CdbSimulatorService {
  private readonly tb = 108 / 100;

  private readonly cdi = 0.9 / 100;

  private readonly cdiTb = this.tb * this.cdi;

  simulateCdb(initialValue: number, months: number): Observable<CdbResult> {
    // or initialValue * (1 + this.cdiTb) ** months
    // or loop between months using totalValue * (1 + this.cdiTb)
    const totalValue = initialValue * Math.pow(1 + this.cdiTb, months);

    const profit = totalValue - initialValue;

    const discountProfit = calculateDiscountedValueCdb(profit, months);

    return of<CdbResult>({
      totalValue,
      discountedValue: totalValue - discountProfit,
    });
  }
}
