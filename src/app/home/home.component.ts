import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CdbSimulatorService } from '../data/services/cdb-simulator.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private readonly cdbSimulatorService: CdbSimulatorService) {}

  ngOnInit(): void {
    console.log('init home');
    this.cdbSimulatorService.simulateCdb().subscribe(console.log);
  }
}
