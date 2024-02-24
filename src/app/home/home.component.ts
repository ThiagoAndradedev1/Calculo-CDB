import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CdbSimulatorService } from '../data/services/cdb-simulator.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly fbBuilder: FormBuilder,
    private readonly cdbSimulatorService: CdbSimulatorService
  ) {}

  protected form = this.fbBuilder.group({
    initialValue: [0, Validators.required],
    months: [0, Validators.required],
  });

  ngOnInit(): void {
    console.log('init home');
  }

  submit(): void {
    const initialValue = this.form.controls.initialValue.value;
    const monthsValue = this.form.controls.months.value;

    if (initialValue && monthsValue) {
      this.cdbSimulatorService
        .simulateCdb(initialValue, monthsValue)
        .subscribe(console.log);
    }
  }
}
