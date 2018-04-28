
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import {user} from '../../models/user'


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private fireauth: AngularFireAuth) {
    
  }


  //LOGIN FUNCTION
  login(user:user){
  	var promise = new Promise((resolve, reject)=>{
  		this.fireauth.auth.signInWithEmailAndPassword(user.email, user.password).then(()=>{
  			resolve(true);
  		}).catch((err)=>{
  			reject(err);
  		})
  	})  
  	return promise;
  }



}
