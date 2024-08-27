import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMoney',
  standalone: true,
})
export class ConvertMoneyPipe implements PipeTransform {
  transform(valorReal: number): any {
    let valorConvertido = valorReal/5.5;
    return Math.ceil(valorConvertido);
  }
}
