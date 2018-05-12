import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NfcPage } from './nfc';
import { NFC, Ndef } from '@ionic-native/nfc';

@NgModule({
  declarations: [
    NfcPage,
  ],
  imports: [
    IonicPageModule.forChild(NfcPage),
  ],
  providers : [
    NFC,
    Ndef
  ]
})
export class NfcPageModule {}
