import { FormControl } from '@angular/forms';

export interface SimulationForm {
  initialValue: FormControl<number | null>;
  months: FormControl<number | null>;
}
