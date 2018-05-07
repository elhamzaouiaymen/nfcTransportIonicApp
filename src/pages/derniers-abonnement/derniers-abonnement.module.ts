import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DerniersAbonnementPage } from './derniers-abonnement';

@NgModule({
  declarations: [
    DerniersAbonnementPage,
  ],
  imports: [
    IonicPageModule.forChild(DerniersAbonnementPage),
  ],
})
export class DerniersAbonnementPageModule {}
