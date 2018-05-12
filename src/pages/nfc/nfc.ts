import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// plugins
import { NFC, Ndef } from '@ionic-native/nfc';

import { Subscription } from 'rxjs/Rx'

@IonicPage()
@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class NfcPage {
  readingTag:   boolean   = false;
  writingTag:   boolean   = false;
  isWriting:    boolean   = false;
  ndefMsg:      string    = '';
  subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nfc: NFC,
    public ndef: Ndef) {

      this.subscriptions.push(this.nfc.addNdefListener()
        .subscribe(data => {
          if (this.readingTag) {
            let payload = data.tag.ndefMessage[0].payload;
            let tagContent = this.nfc.bytesToString(payload).substring(3);
            this.readingTag = false;
            console.log("tag data", tagContent);
          } 
          else if (this.writingTag) {
            if (!this.isWriting) {
              this.isWriting = true;
              this.nfc.write([this.ndefMsg])
                .then(() => {
                  this.writingTag = false;
                  this.isWriting = false;
                  console.log("written");
                })
                .catch(err => {
                  this.writingTag = false;
                  this.isWriting = false;
                });
            }
          }
        },
        err => {
        
        })
     );
  }

  ionViewWillLeave() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  readTag() {
    this.readingTag = true;
  }

  writeTag(writeText: string) {
    this.writingTag = true;
    this.ndefMsg = this.ndef.encodeMessage(writeText);
  }
}
