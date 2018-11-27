import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading,ToastController, Toast } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth'
import { IUser } from '../../models/IUser';
import { AngularFireAuth } from "@angular/fire/auth";
import { PasswordValidation } from '../../validators/passwordValidator';
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	private user: IUser;
	private toastInstance :Toast ;
	private registerForm: FormGroup;

	//declaring form controls
	emailCtrl = new FormControl('', [
	    Validators.required,
	    Validators.email
	  ]);
  
	passwordCtrl = new FormControl('', [
    	Validators.required
  	]);
  
  	repeatPasswordCtrl = new FormControl('', [
    	Validators.required,
  	]);

	constructor (
			private navCtrl: NavController,
			private auth: AuthProvider,
			private fb: FormBuilder,
			private fireauth: AngularFireAuth,
			private loadingCtrl: LoadingController,
			private toastCtrl: ToastController
		) {

		this.user = {
			email: '',
			password:'',
			firstname: '',
			lastname: ''
		}

		this.registerForm = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		},{validator: PasswordValidation.MatchPassword});
		}



	private register(){
		this.fireauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
		.then((res)=>{
			this.presentToastWithMessage('Vous êtes inscrit avec succès. Vous pouvez se connecter !')
			this.navCtrl.push(LoginPage);
		})
		.catch((err)=>{
			this.presentToastWithMessage(err.message);
		});
		 
    }

    private presentToastWithMessage(e: string) {

		 if(this.toastInstance) {
		    return;
		 }

		 this.toastInstance = this.toastCtrl.create({
		    message: e,
		    duration: 4000,
		    position: 'top'
		  });

		  this.toastInstance.onDidDismiss(() => {
		     this.toastInstance = null;
		  });

		  this.toastInstance.present();
	}

	private goToLogin(){
		this.navCtrl.push(LoginPage);
	}

}
