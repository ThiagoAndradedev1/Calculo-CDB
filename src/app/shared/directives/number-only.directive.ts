import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true,
})
export class NumberOnlyDirective {
  constructor(private _el: ElementRef, private _ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(): void {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/\D*/g, '');
    this._ngControl.control?.patchValue(initalValue.replace(/\D*/g, ''));
  }
}
