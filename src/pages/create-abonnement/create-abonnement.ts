import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { IAbonnement } from '../../models/IAbonnement'

/**
 * Generated class for the CreateAbonnementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-abonnement',
  templateUrl: 'create-abonnement.html',
})
export class CreateAbonnementPage {
	countClasseChanges = 0;
	countDureeChanges =0;
	abonnement: IAbonnement = {
		depart : '',
		destination: '',
		classe: '',
		duree: '',
		prix: 0,
    dateCreation: null,
    expiration: null
	};

	constructor(	public navCtrl: NavController, 
	  				public navParams: NavParams,
	  				private db: AngularFireDatabase) {
	  	this.abonnement.dateCreation = new Date();
      console.log(this.abonnement.dateCreation.getYear());
	  }
	
	private abonnementListRef = this.db.list('abonnements');
  
  	private addAbonnement(abonnement: IAbonnement){
  		console.log(abonnement);
  		this.abonnementListRef.push(abonnement).then((ref)=>{
  			console.log(ref);
  		});
  	}

  	private onDureeChanged(selected, selectedClasse){

  		/*if(this.countClasseChanges > 1 && this.countDureeChanges >1){
			selectedClasse.value=-1;
			this.abonnement.prix = 0;
  		}else{*/

        
        if(selectedClasse._value !== undefined){
          selectedClasse.value= -1;
        }else {
          this.abonnement.prix = 0;
            switch (selected) {
        case "1 Mois":
          this.abonnement.prix+= 30;
          this.abonnement.expiration.setDate(this.abonnement.dateCreation.getDate()+30);          
          break;
        case "6 Mois":
          this.abonnement.prix+= 78;          
          break;
        case "1 an":
          this.abonnement.prix+= 120;          
          break;
        
        default:
          this.abonnement.prix = 0;
          break;
    //  }
      }
        }

  		
  		
  		
  	}

  	private onClasseChanged(selected, selectedDuree){

  		if(this.countClasseChanges > 1 && this.countClasseChanges > 1){
			selectedDuree.value=-1;
			this.abonnement.prix = 0;
  		}else{
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

}
