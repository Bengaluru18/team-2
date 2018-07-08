import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  getsalesman(fid)
  {
    console.log(fid);
    console.log("http://13.229.237.24:5001/farmer/"+fid);
    return this.http.get("http://13.229.237.24:5001/farmer/"+fid)
    //.do(res => console.log(res))
    .map(res => res);
  }
  

}
