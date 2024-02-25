import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();
  });

  it('should create the HomeComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call the function on event emit', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    const simulationFormComp = fixture.debugElement.query(
      By.css('#simulation-form-comp')
    );

    simulationFormComp.triggerEventHandler('submitSimulationEvent', {});
    fixture.detectChanges();

    expect(component.submitSimulationEvent).toBeTruthy();
  });
});
