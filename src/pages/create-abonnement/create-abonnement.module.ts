import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAbonnementPage } from './create-abonnement';

@NgModule({
  declarations: [
    CreateAbonnementPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAbonnementPage),
  ],
})
export class CreateAbonnementPageModule {}
