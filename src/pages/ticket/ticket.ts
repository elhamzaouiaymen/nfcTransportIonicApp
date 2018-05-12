import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IAbonnement } from '../../models/IAbonnement';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  
	private abonnement: IAbonnement = {
		ref : '',
		depart : '',
		destination: '',
		classe: '',
		duree: '',
		prix: 0,
    startDate: '',
    endDate: ''
  };
  private abonnementListRef = this.db.list('tickets');
  
  constructor(private db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }


  addTicket(ticket: IAbonnement){
      var currentdate = new Date().toISOString();
      ticket.startDate = currentdate;
      console.log(currentdate)
  		this.abonnementListRef.push(ticket).then((ref)=>{
  			console.log(ref);
			});
		
  }

}
