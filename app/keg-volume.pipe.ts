import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "kegVolume",
  pure: false
})

export class KegVolumePipe implements PipeTransform {
  transform(input: Keg[], kegVolume: number) {
    var output: Keg[] = [];
    for (var i = 0; i <input.length; i++) {
      if (input[i].pints <= kegVolume) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
