import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SimulationResultsComponent } from './components/simulation-results/simulation-results.component';
import { SimulationFormComponent } from './components/simulation-form/simulation-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SimulationResultsComponent, SimulationFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected totalValue = signal(0);
  protected discountedValue = signal(0);
  protected months = signal(0);

  submitSimulationEvent(submitEvent: {
    totalValue: number;
    discountedValue: number;
    months: number;
  }): void {
    this.totalValue.set(submitEvent.totalValue);
    this.discountedValue.set(submitEvent.discountedValue);
    this.months.set(submitEvent.months);
  }
}
