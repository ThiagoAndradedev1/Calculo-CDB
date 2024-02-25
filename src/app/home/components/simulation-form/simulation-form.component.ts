import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SimulationResultsComponent } from '../simulation-results/simulation-results.component';
import { NumberOnlyDirective } from '../../../shared/directives/number-only.directive';
import { CurrencyDirective } from '../../../shared/directives/currency.directive';
import { CdbSimulatorService } from '../../../data/services/cdb-simulator.service';
import { SimulationForm } from '../../forms';

@Component({
  selector: 'app-simulation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SimulationResultsComponent,
    NumberOnlyDirective,
    CurrencyDirective,
  ],
  templateUrl: './simulation-form.component.html',
  styleUrl: './simulation-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimulationFormComponent {
  constructor(
    private readonly fbBuilder: FormBuilder,
    private readonly cdbSimulatorService: CdbSimulatorService
  ) {}

  protected form = this.fbBuilder.group<SimulationForm>({
    initialValue: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(1)],
    }),
    months: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(1)],
    }),
  });

  @Output()
  public submitSimulationEvent = new EventEmitter<{
    totalValue: number;
    discountedValue: number;
    months: number;
  }>();

  submit(): void {
    const initialValue = this.form.controls.initialValue.value;
    const monthsValue = this.form.controls.months.value;

    if (initialValue && monthsValue) {
      this.cdbSimulatorService
        .simulateCdb(initialValue, monthsValue)
        .subscribe((resultCdb) => {
          this.submitSimulationEvent.emit({
            totalValue: resultCdb.totalValue,
            discountedValue: resultCdb.discountedValue,
            months: this.form.controls.months.value ?? 0,
          });
        });
    }
  }

  get formControls(): {
    initialValue: FormControl<number | null>;
    months: FormControl<number | null>;
  } {
    return this.form.controls;
  }
}
