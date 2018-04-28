import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth'
import { TabsPage } from '../../pages/tabs/tabs'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loginForm: FormGroup;
	loginError: string;

	constructor(
			private navCtrl: NavController,
			private auth: AuthProvider,
			fb: FormBuilder
		) {
			this.loginForm = fb.group({
				email: ['', Validators.compose([Validators.required, Validators.email])],
				password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
			});
		}


	login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(TabsPage),
				error => this.loginError = error.message
			);
	}
}
