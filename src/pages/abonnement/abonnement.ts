import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CreateAbonnementPage} from '../create-abonnement/create-abonnement'
import { DerniersAbonnementPage} from '../derniers-abonnement/derniers-abonnement'
/**
 * Generated class for the AbonnementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abonnement',
  templateUrl: 'abonnement.html',
})
export class AbonnementPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
 

  }

   showConfirm(){
    let confirm = this.alertCtrl.create({
      title: 'Voulez vous confirmer ?',
      message: 'Vous êtes sure de confirmer votre abonnement ?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbonnementPage');
  }

  private goToAbonnement(){
    this.navCtrl.push(CreateAbonnementPage);
  }

  private goToHistorique(){
    this.navCtrl.push(DerniersAbonnementPage);
  }

}
