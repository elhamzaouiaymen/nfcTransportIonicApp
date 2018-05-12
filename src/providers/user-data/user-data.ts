import { Injectable, Inject } from '@angular/core';
import { AngularFireModule, FirebaseApp } from "angularfire2";
import firebase from 'firebase'
import { Guid } from '../../utils/Guid';
/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  constructor(private af: AngularFireModule, @Inject(FirebaseApp) private firebaseApp: any) {
    
  }

  public uploadPicture(profilePicture: any): Promise<string> {
    const profilePictureRef: firebase.storage.Reference = this.firebaseApp.storage().ref('/');
    return profilePictureRef.child(Guid.newGuid()).child("profilePicture")
      .putString(profilePicture, "base64", { contentType: "image/png"})
      .then((pictureSnapshot: any) => {
        profilePicture = pictureSnapshot;
        return pictureSnapshot.downloadURL;
      });
  }

}
