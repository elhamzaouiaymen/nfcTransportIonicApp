import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { IAbonnement } from '../../models/IAbonnement';

/**
 * Generated class for the TicketlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticketlist',
  templateUrl: 'ticketlist.html',
})
export class TicketlistPage {

  private tickets: FirebaseListObservable<IAbonnement[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:AngularFireDatabase) {
    this.tickets = db.list('tickets');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketlistPage');
  }

}
