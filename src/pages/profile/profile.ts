import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	imgurl = 'nfcproject-34216.appspot.com';
  	moveon = true;

	constructor(public navCtrl: NavController, public navParams: NavParams, public imgservice: ImghandlerProvider,
	  public zone: NgZone, public userservice: UserProvider, public loadingCtrl: LoadingController) {
	}
  





}
