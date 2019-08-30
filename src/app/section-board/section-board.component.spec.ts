import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBoardComponent } from './section-board.component';

describe('SectionBoardComponent', () => {
  let component: SectionBoardComponent;
  let fixture: ComponentFixture<SectionBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
