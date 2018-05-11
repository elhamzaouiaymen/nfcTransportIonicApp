import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbonnementDetailsPage } from './abonnement-details';

@NgModule({
  declarations: [
    AbonnementDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AbonnementDetailsPage),
  ],
})
export class AbonnementDetailsPageModule {}
