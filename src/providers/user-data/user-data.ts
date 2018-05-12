import { Injectable, Inject } from '@angular/core';
import { AngularFireModule, FirebaseApp } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import firebase from 'firebase'
import { Guid } from '../../utils/Guid';
/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  constructor(private auth: AngularFireAuth,private af: AngularFireModule, @Inject(FirebaseApp) private firebaseApp: any) {
    
  }

  public getCurrentUserEmail(){
    return firebase.auth().currentUser.email
  }

  getCurrentUserID(){
    return firebase.auth().currentUser.uid;
  }


  public uploadPicture(userId: string, profilePicture: any): Promise<string> {
    const profilePictureRef: firebase.storage.Reference = this.firebaseApp.storage().ref('/');
    return profilePictureRef.child(firebase.auth().currentUser.uid).child("profilePicture")
      .putString(profilePicture, "base64", { contentType: "image/png"})
      .then((pictureSnapshot: any) => {
        const userProfilePictureRef: firebase.database.Reference = this.firebaseApp.database().ref(`/userProfile/${userId}/profilePicture`);
        userProfilePictureRef.set(pictureSnapshot.downloadURL);
        profilePicture = pictureSnapshot;
        return pictureSnapshot.downloadURL;
      });
  }

}
