import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SendPage } from '../send/send';
import { AccountPage } from '../account/account';

import { EosProvider } from '../../providers/eos/eos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public account: any = "";
  public privateKey: any = "";
  public balance: any = "";

  //Pages
  public sendPage: any = SendPage;
  public accountPage: any = AccountPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public eos: EosProvider) {
    this.account = this.navParams.get("account");
    this.privateKey = this.navParams.get("privateKey");
    this.getBalance();
  }

  ionViewDidLoad() { }

  onSend() {
    this.navCtrl.push(this.sendPage);
  }

  getBalance() {
    this.eos.getBalance(this.account).then(balance => {
      this.balance = balance[0];
    }, err => {
      console.log("Error: ", err);
    })
  }

  onLogout() {
    this.navCtrl.setRoot(this.accountPage);
  }


}
