import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

firedata = firebase.database().ref('/users')
  constructor(public fireauth: AngularFireAuth) {
    //console.log('Hello UserProvider Provider');
  }

  
}
