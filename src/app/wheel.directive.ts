import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[wheel]'
})
export class WheelDirective {
  interval: number = 1;
  @HostListener('wheel', ['$event'])
  Wheel(event: any) {
    console.log('wheel ', event);
    event.target.scrollLeft = event.target.scrollLeft + this.interval;
    console.log(event.target.scrollLeft);
    event.target.scrollLeft = 200;
    console.log(event.target.scrollLeft);

  }
  constructor() { }
}
