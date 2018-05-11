import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarModalPage } from './calendar-modal';
import { CalendarModule } from 'ionic3-calendar-en';
@NgModule({
  declarations: [
    CalendarModalPage,
  ],
  imports: [
    
    IonicPageModule.forChild(CalendarModalPage),
    CalendarModule
  ],
})
export class CalendarModalPageModule {}
