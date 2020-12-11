import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceArray'
})
export class SliceArrayPipe implements PipeTransform {

  transform(array: any[], itemsAmount: number): any[] {
    return [...array].slice(0, itemsAmount);
  }
}
