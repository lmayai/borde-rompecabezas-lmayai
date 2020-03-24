import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayorAUno'
})
export class MayorAUnoPipe implements PipeTransform {

  transform(value: number): number {
    if(value >=1 ) {
      return Math.round(value);
    }
    return value;
  }

}