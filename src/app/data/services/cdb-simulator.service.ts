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
    const totalValue = initialValue * (1 + this.cdiTb);

    const discountedValue = calculateDiscountedValueCdb(totalValue, months);

    return of<CdbResult>({ totalValue, discountedValue });
  }
}
