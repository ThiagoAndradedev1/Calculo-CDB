import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  type OnInit,
} from '@angular/core';
import { CdbSimulatorService } from '../data/services/cdb-simulator.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SimulationResultsComponent } from './components/simulation-results/simulation-results.component';
import { SimulationForm } from './forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SimulationResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
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

  protected totalValue = signal(0);
  protected discountedValue = signal(0);
  protected months = signal(0);

  ngOnInit(): void {
    // this.form.controls.months.valueChanges.pipe()
  }

  submit(): void {
    const initialValue = this.form.controls.initialValue.value;
    const monthsValue = this.form.controls.months.value;

    if (initialValue && monthsValue) {
      this.cdbSimulatorService
        .simulateCdb(initialValue, monthsValue)
        .subscribe((resultCdb) => {
          this.totalValue.set(resultCdb.totalValue);
          this.discountedValue.set(resultCdb.discountedValue);
          this.months.set(this.form.controls.months.value ?? 0);
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
