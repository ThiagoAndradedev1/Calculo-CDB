import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CdbResult } from '../schemas';

@Injectable({
  providedIn: 'root',
})
export class CdbSimulatorService {
  private readonly tb = 108 / 100;

  private readonly cdi = 0.9 / 100;

  private readonly cdiTb = this.tb * this.cdi;

  discountValue(totalValue: number, months: number): number {
    if (months <= 6) {
      return totalValue - totalValue * (22.5 / 100);
    }

    if (months > 6 && months <= 12) {
      return totalValue - totalValue * (20 / 100);
    }

    if (months > 12 && months <= 24) {
      return totalValue - totalValue * (17.5 / 100);
    }

    if (months > 24) {
      return totalValue - totalValue * (15 / 100);
    }

    return 0;
  }

  simulateCdb(initialValue: number, months: number): Observable<CdbResult> {
    const totalValue = initialValue * (1 + this.cdiTb);

    const discountedValue = this.discountValue(totalValue, months);

    return of<CdbResult>({ totalValue, discountedValue });
  }
}
