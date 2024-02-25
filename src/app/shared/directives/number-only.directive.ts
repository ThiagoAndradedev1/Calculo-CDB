import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true,
})
export class NumberOnlyDirective {
  constructor(private _el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(): void {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/\D*/g, '');
  }
}
