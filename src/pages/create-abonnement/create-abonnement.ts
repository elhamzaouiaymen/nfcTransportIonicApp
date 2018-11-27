import { Component, OnChanges, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { IAbonnement } from '../../models/IAbonnement'
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { Guid } from '../../utils/Guid';
import { DateUtils } from '../../utils/DateUtils'

@IonicPage()
@Component({
  selector: 'page-create-abonnement',
  templateUrl: 'create-abonnement.html',
})
export class CreateAbonnementPage implements OnInit {

	startDateChanged: boolean = false;
	endDateChanged : boolean = false;

	private abonnement: IAbonnement = {
		ref : '',
		depart : '',
		destination: '',
		classe: '',
		duree: '',
		prix: 0,
    	startDate: '',
    	endDate: ''
	};

	constructor(	public navCtrl: NavController, 
	  				public navParams: NavParams, private modal: ModalController,
	  				private db: AngularFireDatabase) { }
	
	private abonnementListRef = this.db.list('abonnements');
  
  	private addAbonnement(abonnement: IAbonnement){
			var startdate = new Date(abonnement.startDate);
			var enddate = new Date(abonnement.endDate);
			abonnement.duree = DateUtils.getPeriodBetween(startdate, enddate); 
		
  		this.abonnementListRef.push(abonnement).then((ref)=>{
  			console.log(ref);
			});
		}
		
		ngOnInit(){

		}


		private onStartDateChanged(startEvent, endEvent){
		//	this.abonnement.prix += 0.5 * DateUtils.getPeriodBetween(startEvent, endEvent);
			this.startDateChanged = true; 
			
		}

		private onEndDateChanged(endEvent, startEvent){
			this.abonnement.prix += 0.5 * DateUtils.getPeriodBetween(startEvent.value, endEvent.value);
			this.endDateChanged = true
		} 

  	private onClasseChanged(selected){

			switch (selected) {
	  			case "Economique":
	  				this.abonnement.prix+= 2;  				
	  				break;
	  			case "Business":
	  				this.abonnement.prix+= 50;  				
	  				break;
	  			case "Familiale":
	  				this.abonnement.prix+= 40;  				
	  				break;
	  			
	  			default:
	  				//do nothing
	  				break;
  		}
  		
		}
}
