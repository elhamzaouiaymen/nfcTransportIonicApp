import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AbonnementPage} from './../abonnement/abonnement'

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

}
