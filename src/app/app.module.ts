import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera'; 
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
import { AngularFireDatabase } from '@angular/fire/database';


import { AngularFireModule} from '@angular/fire';
import { AngularFireAuth} from '@angular/fire/auth';
import { AbonnementDetailsPageModule } from '../pages/abonnement-details/abonnement-details.module';
import { UserDataProvider } from '../providers/user-data/user-data';
import { NfcPage } from '../pages/nfc/nfc';
import { NFC, Ndef } from '@ionic-native/nfc';
import { FeedbackPage } from '../pages/feedback/feedback';
import { EmailComposer } from '@ionic-native/email-composer';

import {TicketPage} from '../pages/ticket/ticket'
import { TicketlistPage } from '../pages/ticketlist/ticketlist';
import { MapProvider } from '../providers/map/map';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';


  var FirebaseConfig = {
    apiKey: "AIzaSyAEyuf38IXsCh5i-AYiLq8Yg2yMJ5zcA2Q",
    authDomain: "saferapp-6556f.firebaseapp.com",
    databaseURL: "https://saferapp-6556f.firebaseio.com",
    projectId: "saferapp-6556f",
    storageBucket: "saferapp-6556f.appspot.com",
    messagingSenderId: "717733219169"
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
    NfcPage,
    FeedbackPage,
    TicketPage,
    TicketlistPage
  

  ],
  imports: [
    NgxErrorsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig),  
    AbonnementDetailsPageModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZWxoYW16YW91aWF5bWVuIiwiYSI6ImNqb3NrN25ydjBhMTIzcHM1d3AxZncxcTgifQ.FSMth9z4WzrcJIeq-sWBJA', // Optionnal, can also be set per map (accessToken input of mgl-map)
    })
    
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
    NfcPage,
    FeedbackPage,
    TicketPage,
    TicketlistPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AuthProvider,
    AngularFireAuth,
    AngularFireDatabase,
    UserDataProvider,
    NFC,
    Ndef,
    EmailComposer,
    MapProvider,
    Camera
  ]
})
export class AppModule {}
