import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { IAbonnement } from '../../models/IAbonnement';

/**
 * Generated class for the AbonnementDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abonnement-details',
  templateUrl: 'abonnement-details.html',
})
export class AbonnementDetailsPage {

  abonnement : IAbonnement = {
    ref : '',
 	  depart: '',
 	  destination: '',
 	  classe: '',
 	  duree: '',
 	  prix: 0,
 	  startDate: '',
 	  endDate: ''
  }

 
  constructor(private navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    this.abonnement = this.navParams.get('data');
    console.log(this.abonnement);
  }

  closeModal() {

    this.view.dismiss(this.abonnement);
  }


}
