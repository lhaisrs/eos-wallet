import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public homePage: any = HomePage;

  //Model
  public account: any = 'havanalalala';
  public privateKey: any = '5JeNYc7PM3Vye7qsPrSm52Ju5s9SwzVj7oVqoytBHo1LknYL58h';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  onNext() {
    this.navCtrl.setRoot(this.homePage, {account: this.account, privateKey: this.privateKey});
  }

}
