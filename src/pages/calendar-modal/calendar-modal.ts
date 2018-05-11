import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CalendarModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar-modal',
  templateUrl: 'calendar-modal.html',
})
export class CalendarModalPage {
  data = {
    picked: ''
  };

 
  constructor(private navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    this.data = this.navParams.get('data');
    console.log(this.data);
  }

  closeModal() {
    this.data.picked = ""
    this.view.dismiss(this.data);
  }

  onDaySelect(e: any){
    console.log(e);
    this.data.picked = e ; 
    console.log("picked : "+this.data.picked)
  }

}
