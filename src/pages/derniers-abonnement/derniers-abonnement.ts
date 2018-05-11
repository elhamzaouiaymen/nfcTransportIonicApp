import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { IAbonnement } from '../../models/IAbonnement'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

/**
 * Generated class for the DerniersAbonnementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derniers-abonnement',
  templateUrl: 'derniers-abonnement.html',
})
export class DerniersAbonnementPage {

  private abonnements: FirebaseListObservable<IAbonnement[]>;

  constructor(public navCtrl: NavController,private modal: ModalController, public navParams: NavParams, private db:AngularFireDatabase ) {
    this.abonnements = db.list('abonnements');
  }

  private showDetails(abonnement: IAbonnement){
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false
      };

      const myModal: Modal = this.modal.create('AbonnementDetailsPage', { data: abonnement }, myModalOptions);
      myModal.present();
      myModal.onDidDismiss((data) => {
        //some code here
      });

      myModal.onWillDismiss((data) => {
        // some code when modal will dissmiss
    });
  }





}
