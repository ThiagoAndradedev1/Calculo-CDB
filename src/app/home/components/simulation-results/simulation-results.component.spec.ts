import { TestBed } from '@angular/core/testing';
import { SimulationResultsComponent } from './simulation-results.component';

describe('SimulationResultsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationResultsComponent],
    }).compileComponents();
  });

  it('should create the SimulationResultsComponent', () => {
    const fixture = TestBed.createComponent(SimulationResultsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set the total value as 10', () => {
    const fixture = TestBed.createComponent(SimulationResultsComponent);
    const component = fixture.componentInstance;

    component.totalValue = 10;
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('#totalValue').innerText
    ).toEqual('Valor bruto: $10.00');
  });
});
