var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AbonnementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbonnementPage = /** @class */ (function () {
    function AbonnementPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AbonnementPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Voulez vous confirmer ?',
            message: 'Vous êtes sure de confirmer votre abonnement ?',
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Confirmer',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    AbonnementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbonnementPage');
    };
    AbonnementPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-abonnement',
            templateUrl: 'abonnement.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], AbonnementPage);
    return AbonnementPage;
}());
export { AbonnementPage };
//# sourceMappingURL=abonnement.js.map