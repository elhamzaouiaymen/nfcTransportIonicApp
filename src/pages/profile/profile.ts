import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular'
import { Camera } from 'ionic-native'; 
import { UserDataProvider } from '../../providers/user-data/user-data';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {
	debug : string = "undefined";
	pictureData: any;
	pictureUrl: any;
	mypicRef: any;
	username : string;

	constructor(private userData:UserDataProvider ,public nav: NavController) {

	}

	ngOnInit(){
		this.username = this.userData.getCurrentUserEmail();
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
			  // tslint:disable-next-line:whitespace
			}).catch(err => {
				console.log(err)
			})
	}


  





}
