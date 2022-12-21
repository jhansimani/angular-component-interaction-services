import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSeparator',
  pure: true,
})
export class NumberSepartor implements PipeTransform {
  transform(input: any, limit = 0) {
    let value = String(input).split('');
    let transformedValue = [];
    if (limit === 0) {
      return value.join('');
    } else {
      let jkl = value.reverse();
      for (let i = 0; i < jkl.length; i = i + 1) {
        let v1 = [];
        let flag = 1;
        while (flag <= limit) {
          v1.push(jkl.shift());
          flag++;
        }
        transformedValue.push(v1.reverse().join(''));
      }
      if (jkl.length < limit) {
        let v2 = jkl.slice(0);
        transformedValue.push(v2.reverse().join(''));
      }
      // console.log(transformedValue);
      // console.log(transformedValue.reverse().join('_'));
      return transformedValue.reverse().join(',');
    }
  }
}
