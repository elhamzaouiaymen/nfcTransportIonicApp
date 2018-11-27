import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { IAbonnement } from '../../models/IAbonnement';
import { Observable } from 'rxjs';
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
export class TicketlistPage implements OnInit {

  tickets :Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:AngularFireDatabase) {
    
  }

  ngOnInit(){
  	this.tickets = this.db.list('tickets').valueChanges();
  }


}
