import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberProfile'
})
export class MemberProfilePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
