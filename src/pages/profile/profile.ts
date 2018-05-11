import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
import { Camera } from 'ionic-native'; 
import firebase from 'firebase';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	debug : string = "undefined";
	pictureData: any;
	pictureUrl: any;
	mypicRef: any;

	constructor(public nav: NavController) {
		this.mypicRef =  firebase.storage().ref('/photos/');
	}


	takePicture(){
		Camera.getPicture({
			quality: 100,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			encodingType: Camera.EncodingType.PNG
			//saveToPhotoAlbum: true
		}).then(imgData => {
			this.pictureUrl = imgData;
			if(this.pictureUrl === undefined){
				this.debug = "underined1"
			}else{
				this.debug = this.pictureUrl
			}
			this.upload();
		})
	}

	upload(){
		this.mypicRef.child(this.generateUUID()).child('pic.png')
		.putString(this.pictureData,'base64', {contentType : 'image/png'})
		.then(savepic => {
			this.pictureUrl = savepic.downloadURL
		})
	}

	private generateUUID(){
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
    	return uuid;
	}


  





}
