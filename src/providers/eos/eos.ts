import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import Eos from 'eosjs';

/*
  Generated class for the EosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class EosProvider {

  public eos: any;

  constructor(public http: HttpClient) {
    this.eos = Eos({
      httpEndpoint: 'http://jungle2.cryptolions.io',
      chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
      keyProvider: ''
    })
  }

  getBalance(account: string) {
    return this.eos.getCurrencyBalance('eosio.token', account, 'EOS');
  }

}
