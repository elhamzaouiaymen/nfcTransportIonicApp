import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { Camera } from 'ionic-native'; 
import { UserDataProvider } from '../../providers/user-data/user-data';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {
	public profileId: string = this.navParams.get("userId");
	pictureData: any;
	pictureUrl: any;
	mypicRef: any;
	username : string;
	email : string;

	constructor(private userData:UserDataProvider, private navParams :NavParams ,public nav: NavController) {
		let user = this.userData.fetchUser(userData.getCurrentUserID())
		this.setProfilePictureURL(user);
}

	ngOnInit(){
		this.email = this.userData.getCurrentUserEmail();
		this.username = this.userData.getCurrentUserEmail().split('@')[0];
	}

	public logout(){
		this.userData.logout();
		this.nav.setRoot('LoginPage');
	}

	public setProfilePictureURL(user:any): void {
		if (!user) {
		  this.pictureUrl = "assets/images/user.png";
		} else {
		  this.pictureUrl = user.profilePicture;
		}
	  }


	takePicture(){
		Camera.getPicture({
			quality: 95,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: false,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 250,
			saveToPhotoAlbum: true,
			correctOrientation: true
		}).then(imgData => {
			this.userData.uploadPicture(this.userData.getCurrentUserID(),imgData).then(profileURL => {
				this.pictureUrl = profileURL;
				return this.pictureUrl;
			  });
			}).catch(err => {
				console.log(err)
			})
	}


  





}
