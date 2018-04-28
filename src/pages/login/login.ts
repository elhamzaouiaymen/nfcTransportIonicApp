import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, Loading, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth'
import { TabsPage } from '../../pages/tabs/tabs'
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AlertController, Alert } from 'ionic-angular';
import { ToastController, Toast } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	private toastInstance :Toast ;
	private alertInstance :Alert ;
	private loaderInstance :Loading ;
	loginForm: FormGroup;
	loginError: string;

	constructor (
			private navCtrl: NavController,
			private auth: AuthProvider,
			fb: FormBuilder,
			private loadingCtrl: LoadingController,
			private toastCtrl: ToastController
		) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
		}




	private presentAuthErrorToast() {

		 if(this.toastInstance) {
		    return;
		 }

		 this.toastInstance = this.toastCtrl.create({
		    message: 'Authentification echouée',
		    duration: 4000,
		    position: 'top'
		  });

		  this.toastInstance.onDidDismiss(() => {
		     this.toastInstance = null;
		  });

		  this.toastInstance.present();
	}

	private presentLoader(){
		if(this.loaderInstance){
			return;
		}

		this.loaderInstance = this.loadingCtrl.create({
			spinner: 'hide',
			content: 'Veuillez patienter ...',
			dismissOnPageChange: true
		  });

		this.loaderInstance.onDidDismiss(() => {
		     this.loaderInstance = null;
		 });
		this.loaderInstance.present()
		
	}




	private login() {
		this.presentLoader();
		let userdata = this.loginForm.value;

		if (!userdata.email) {
			return;
		}

		let credentials = {
			email: userdata.email,
			password: userdata.password
		};

		this.auth.signInWithEmail(credentials)
			.then(
				() =>{		
					this.navCtrl.setRoot(TabsPage)
				},
				error => {
					
					this.loaderInstance.dismiss()
					this.loginError = error.message;
					this.presentAuthErrorToast();
					
				}
			);
	}

	
}
