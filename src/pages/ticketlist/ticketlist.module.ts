import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketlistPage } from './ticketlist';

@NgModule({
  declarations: [
    TicketlistPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketlistPage),
  ],
})
export class TicketlistPageModule {}
