import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase'

@Injectable()
export class UserDataProvider {

  constructor(private afdb: AngularFireDatabase,private auth: AngularFireAuth) {
    
  }

  public getCurrentUserEmail():string{
    return firebase.auth().currentUser.email
  }

  public getCurrentUserID():string{
    return firebase.auth().currentUser.uid;
  }

  public fetchUser(uid: string) {
    return this.afdb.object(`/userProfile/${uid}`);
  }

  public uploadPicture(userId: string, profilePicture: any): Promise<string> {
    const profilePictureRef: firebase.storage.Reference = firebase.storage().ref('/');
    return profilePictureRef.child(firebase.auth().currentUser.uid).child("profilePicture")
      .putString(profilePicture, "base64", { contentType: "image/png"})
      .then((pictureSnapshot: any) => {
        const userProfilePictureRef: firebase.database.Reference = firebase.database().ref(`/userProfile/${userId}/profilePicture`);
        userProfilePictureRef.set(pictureSnapshot.downloadURL);
        profilePicture = pictureSnapshot;
        return pictureSnapshot.downloadURL;
      });
  }


  public logout(){
    this.auth.auth.signOut();
  }

}
