import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrency]',
  standalone: true,
})
export class CurrencyDirective {
  constructor(private _el: ElementRef, private _ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(_: Event): void {
    const initalValue = this._el.nativeElement.value;
    const valueWithOnlyNumbers = initalValue.replace(/[^0-9]*/g, '');
    const currency = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(valueWithOnlyNumbers / 100));

    const integerValue = currency
      .replace('R$', '')
      .trim()
      .replace('.', '')
      .replace(',', '.');

    this._ngControl.control?.patchValue(integerValue);
    this._el.nativeElement.value = currency;
  }
}
