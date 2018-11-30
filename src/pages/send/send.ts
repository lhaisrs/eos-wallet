import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

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
      public qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

  onQRScanner(){
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if(status.authorized){

      }
    })
  }

}
