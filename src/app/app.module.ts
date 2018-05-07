import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AbonnementPage } from '../pages/abonnement/abonnement'
import { CreateAbonnementPage } from '../pages/create-abonnement/create-abonnement'
import { MapPage } from '../pages/map/map';
import { DerniersAbonnementPage } from '../pages/derniers-abonnement/derniers-abonnement'
import { RegisterPage } from '../pages/register/register'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';



import { AngularFireModule} from 'angularfire2';
import { AngularFireAuth} from 'angularfire2/auth'


 var FirebaseConfig = {
    apiKey: "AIzaSyDpA1u4kHdQRXlMmcQ30QYYh37Pt1J5nQc",
    authDomain: "nfcproject-34216.firebaseapp.com",
    databaseURL: "https://nfcproject-34216.firebaseio.com",
    projectId: "nfcproject-34216",
    storageBucket: "nfcproject-34216.appspot.com",
    messagingSenderId: "221594989971"
  };

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    AbonnementPage,
    MapPage,
    LoginPage,
    RegisterPage,
    CreateAbonnementPage,
    DerniersAbonnementPage,

  ],
  imports: [
    NgxErrorsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig),   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    AbonnementPage,
    MapPage,
    LoginPage,
    CreateAbonnementPage,
    DerniersAbonnementPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AuthProvider,
    AngularFireAuth,
    AngularFireDatabase,
  ]
})
export class AppModule {}
