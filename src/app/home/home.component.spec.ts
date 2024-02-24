import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

function createNewEvent(
  eventName: string,
  bubbles = false,
  cancelable = false,
  detail: unknown = undefined
) {
  const event = new CustomEvent(eventName, { bubbles, cancelable, detail });
  return event;
}

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the SimulationResultsComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have two inputs inside the form tag', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const inputElements = fixture.nativeElement
      .querySelector('#simulation-form')
      .querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it('should update the value of the input field initial value', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const input = fixture.nativeElement.querySelector('#initialValue');

    const event = createNewEvent('input');
    fixture.detectChanges();

    input.value = 10;
    input.dispatchEvent(event);

    const initialValueFormControlValue =
      fixture.componentInstance.formControls.initialValue.value;

    expect(initialValueFormControlValue?.toString()).toEqual('10');
  });

  it('should update the value of the input field month', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const input = fixture.nativeElement.querySelector('#months');

    const event = createNewEvent('input');
    fixture.detectChanges();

    input.value = 100;
    input.dispatchEvent(event);

    const monthsFormControlValue =
      fixture.componentInstance.formControls.months.value;

    expect(monthsFormControlValue?.toString()).toEqual('100');
  });

  it('should update the value in the control initialValue', () => {
    const fixture = TestBed.createComponent(HomeComponent);

    const component = fixture.componentInstance;

    component.formControls.initialValue.setValue(50);
    const input = fixture.nativeElement.querySelector('#initialValue');

    fixture.detectChanges();

    expect(input.value).toBe('50');
  });

  it('should update the value in the control months', () => {
    const fixture = TestBed.createComponent(HomeComponent);

    const component = fixture.componentInstance;

    component.formControls.months.setValue(10);
    const input = fixture.nativeElement.querySelector('#months');

    fixture.detectChanges();

    expect(input.value).toBe('10');
  });

  it('should submit the form when the submit button is clicked', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    spyOn<HomeComponent, any>(component, 'submit');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    tick();
    fixture.detectChanges();

    expect(component.submit).toHaveBeenCalled();
  }));
});
