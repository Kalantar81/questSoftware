import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursMinites'
})
export class HoursMinitesPipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 60);
    const minutes: number = value - hours * 60;
    return hours + 'h ' + minutes + 'm';
  }

}
