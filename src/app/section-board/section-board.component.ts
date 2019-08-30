import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-section-board',
  templateUrl: './section-board.component.html',
  styleUrls: ['./section-board.component.scss']
})
export class SectionBoardComponent implements OnInit, AfterViewInit {
  @ViewChild('panel', {static: true}) panel: ElementRef;
  interval: number = 1;
  // @HostListener('wheel', ['$event'])
  // Wheel(event: any) {
  //   console.log('wheel ', event);
  //   event.target.offsetLeft = event.target.offsetLeft + this.interval;
  //   console.log(event.target.scrollLeft);
  //   event.target.scrollLeft = 200;
  //   console.log(event.target.scrollLeft);
  // }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log("asdfasdfas");
    console.log(this.panel);
    this.panel.nativeElement.addEventListener('wheel', (e) => {
      console.dir(e);
      e.target.scrollLeft = e.target.scrollLeft + (-1 * e.deltaY);
    });
  }


}
