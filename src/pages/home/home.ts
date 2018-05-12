import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AbonnementPage} from './../abonnement/abonnement'
import { NfcPage } from '../nfc/nfc';
import { FeedbackPage } from '../feedback/feedback';
import { TicketPage } from '../ticket/ticket';
import { TicketlistPage } from '../ticketlist/ticketlist';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  	//nothing here.
  }

  goToAbonnement() {
  	this.navCtrl.push(AbonnementPage);  
  }

  goToNFC(){
    this.navCtrl.push(NfcPage);
  }

  goToFeedback(){
    this.navCtrl.push(FeedbackPage);
  }

  goToTicket(){
    this.navCtrl.push(TicketPage)
  }

  goToTicketList(){
    this.navCtrl.push(TicketlistPage)
  }

  goToTrajet(){
    this.navCtrl.push(MapPage);
  }

}
