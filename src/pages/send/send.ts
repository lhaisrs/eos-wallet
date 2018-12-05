import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { EosProvider } from '../../providers/eos/eos';

/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {

  public account: any = "";
  public value: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public eos: EosProvider, public barCodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

  onSend(){
    this.eos.transfer(this.account, Number.parseFloat(this.value)).then(result => {
      this.navCtrl.pop();
    }, err => {
      console.log("Error: ", err);
    })

  }

  onQRScanner(){
    this.barCodeScanner.scan().then(scanData => {
      this.account = scanData.text;
    }, err => {
      console.log("Error: ", err);
    })
  }

}
