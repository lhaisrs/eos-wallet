import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import Eos from 'eosjs';
import { resolve } from 'url';

/*
  Generated class for the EosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class EosProvider {

  public eos: any;

  public account: string;
  public key: string;

  constructor(public http: HttpClient) {
    this.eos = Eos({
      httpEndpoint: 'http://jungle2.cryptolions.io',
      chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
      keyProvider: ''
    })
  }

  setCredential(account: string, key:string) {
    this.account = account;
    this.key = key;
  }

  getBalance(account: string) {
    return this.eos.getCurrencyBalance('eosio.token', account, 'EOS');
  }

  transfer(toAccount: string, value: number){
    const options = {
      keyProvider: this.key
    }
    return this.eos.transfer(this.account, toAccount, `${value.toFixed(4)} EOS`, '', options)
  }

  getUSDValue(value: number){
    return new Promise(resolve => {
      this.http.get('https://api.coinmarketcap.com/v2/ticker/1765/').subscribe(result => {
        const usdValue: any = (result["data"].quotes.USD.price * value).toFixed(2);
        resolve(usdValue);
      }, err => {
        console.log("Error: ", err);
      })
    })
  }

}
