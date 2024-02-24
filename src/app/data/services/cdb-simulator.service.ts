import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CdbResult } from '../schemas';

@Injectable({
  providedIn: 'root',
})
export class CdbSimulatorService {
  private readonly tb = 0;

  private readonly cdi = 0;

  simulateCdb(): Observable<CdbResult> {
    return of<CdbResult>({ totalValue: 0, discountedValue: 0 });
  }
}
