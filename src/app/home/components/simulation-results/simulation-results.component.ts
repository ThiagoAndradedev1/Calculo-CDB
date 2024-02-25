import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-simulation-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simulation-results.component.html',
  styleUrl: './simulation-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimulationResultsComponent {
  @Input() months = 0;
  @Input() totalValue = 0;
  @Input() discountedValue = 0;
}
