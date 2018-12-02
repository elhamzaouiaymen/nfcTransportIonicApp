import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'; 
import { UserDataProvider } from '../../providers/user-data/user-data';
import { LoginPage } from '../login/login';


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

	constructor(private userData:UserDataProvider, private navParams :NavParams ,public nav: NavController, private camera: Camera) {
		let user = this.userData.fetchUser(userData.getCurrentUserID())
		this.setProfilePictureURL(user);
	}

	ngOnInit(){
		this.email = this.userData.getCurrentUserEmail();
		this.username = this.userData.getCurrentUserEmail().split('@')[0];
	}

	public logout(){
		this.userData.logout();
		this.nav.popTo(LoginPage);
	}

	public setProfilePictureURL(user:any): void {
		if (!user) {
		  this.pictureUrl = "assets/images/user.png";
		} else {
		  this.pictureUrl = user.profilePicture;
		}
	  }


	takePicture(){
		const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.FILE_URI,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
		 // imageData is either a base64 encoded string or a file URI
		 // If it's base64 (DATA_URL):
		 //let base64Image = 'data:image/jpeg;base64,' + imageData;
		 this.userData.uploadPicture(this.userData.getCurrentUserID(),imageData).then(profileURL => {
				this.pictureUrl = profileURL;
				return this.pictureUrl;
			  });
		}, (err) => {
		 // Handle error
		});


	}


  





}
