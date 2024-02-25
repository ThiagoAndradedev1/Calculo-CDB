import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrency]',
  standalone: true,
})
export class CurrencyDirective {
  constructor(private _el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const initalValue = this._el.nativeElement.value;
    const valueWithOnlyNumbers = initalValue.replace(/[^0-9]*/g, '');
    const currency = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(valueWithOnlyNumbers / 100));

    this._el.nativeElement.value = currency;

    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
