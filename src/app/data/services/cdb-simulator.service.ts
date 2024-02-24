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
    let totalValue = initialValue;

    console.log(initialValue * Math.pow(1 + this.cdiTb, months));
    console.log(initialValue * (1 + this.cdiTb) ** months);

    for (let index = 0; index < months; index++) {
      totalValue = totalValue * (1 + this.cdiTb);
    }

    const discountedValue = calculateDiscountedValueCdb(totalValue, months);

    return of<CdbResult>({ totalValue, discountedValue });
  }
}
