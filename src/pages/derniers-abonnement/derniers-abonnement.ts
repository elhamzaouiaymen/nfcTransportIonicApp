import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { IAbonnement } from '../../models/IAbonnement'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-derniers-abonnement',
  templateUrl: 'derniers-abonnement.html',
})
export class DerniersAbonnementPage implements OnInit {

  private abonnements:Observable<any[]>;

  constructor(public navCtrl: NavController,
              private modal: ModalController, 
              public navParams: NavParams, 
              private db:AngularFireDatabase ) {}

  ngOnInit(){
    this.abonnements = this.db.list('abonnements').valueChanges();
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
