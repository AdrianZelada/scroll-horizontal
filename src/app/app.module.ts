import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionBoardComponent } from './section-board/section-board.component';
import { WheelDirective } from './wheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    SectionBoardComponent,
    WheelDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
