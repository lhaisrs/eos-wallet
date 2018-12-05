import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SendPage } from '../send/send';
import { AccountPage } from '../account/account';
import { ReceivePage } from '../receive/receive';

import { EosProvider } from '../../providers/eos/eos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public account: any = "";
  public privateKey: any = "";
  public balance: any = "";
  public balanceUSD: any = "";

  //Pages
  public sendPage: any = SendPage;
  public accountPage: any = AccountPage;
  public receivePage: any = ReceivePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public eos: EosProvider) {
    this.account = this.navParams.get("account");
    this.privateKey = this.navParams.get("privateKey");
    this.eos.setCredential(this.account, this.privateKey);
    this.getBalance();
  }

  ionViewWillEnter(){
    this.getBalance();
  }

  ionViewDidLoad() { }

  onSend() {
    this.navCtrl.push(this.sendPage);
  }

  getBalance() {
    this.eos.getBalance(this.account).then(balance => {
      this.balance = balance[0];
      this.eos.getUSDValue(Number.parseFloat(this.balance.split(' ')[0])).then(value => {
        this.balanceUSD = value.toString();
      }, err => {
        console.log("Error: ", err);
      })
    }, err => {
      console.log("Error: ", err);
    })
  }

  onLogout() {
    this.navCtrl.setRoot(this.accountPage);
  }

  onReceive() {
    this.navCtrl.push(this.receivePage, {account: this.account});
  }


}
