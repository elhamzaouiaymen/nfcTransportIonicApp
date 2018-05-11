import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
import { Camera } from 'ionic-native'; 
import firebase from 'firebase' 


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

	pictureData: any;
	pictureUrl: any;
	mypicRef: any;

	constructor(public nav: NavController) {
		this.mypicRef =  firebase.storage().ref('/')
	}


	takePicture(){
		Camera.getPicture({
			quality: 100,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			encodingType: Camera.EncodingType.PNG,
			saveToPhotoAlbum: true
		}).then(imgData => {
			this.pictureUrl = imgData;
		})
	}


  





}
