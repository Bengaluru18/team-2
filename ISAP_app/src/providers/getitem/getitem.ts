import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the GetitemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetitemProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GetitemProvider Provider');
  }

  getItems(cid){
    

    console.log(cid);
    console.log("http://13.229.237.24:5000/getequip/"+cid);
    return this.http.get("http://13.229.237.24:5000/getequip/"+cid)
    //.do(res => console.log(res))
    .map(res => res);
  }

}
