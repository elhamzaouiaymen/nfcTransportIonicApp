import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController , NavParams, LoadingController } from 'ionic-angular';
import { IAbonnement } from '../../models/IAbonnement';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';


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
  
  constructor(private db: AngularFireDatabase,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }


  addTicket(ticket: IAbonnement){
    let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });

    loading.present();
    var currentdate = new Date().toISOString();
    ticket.startDate = currentdate;
  	this.abonnementListRef.push(ticket).then((ref)=>{
  		if (ref) {
         let alert = this.alertCtrl.create({
          title: 'Fait !',
          buttons: [{
        text: 'Retour',
        handler: () => {
          this.navCtrl.popToRoot();
        }
      }]
        });

      loading.dismiss();
      alert.present();

      }
		});
		
  }

}
