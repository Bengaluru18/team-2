import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/*
  Generated class for the BookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingProvider {

  constructor(public http: Http) {
    console.log('Hello BookingProvider Provider');
  }

  book (pid,pname,qty,bdate,rdate,fid)
  {

    console.log("http://13.229.237.24:5001/inserting_booking/"+pid+"/"+pname+"/"+qty+"/"+bdate+"/"+rdate+"/"+fid)
    return  this.http.post("http://13.229.237.24:5001/inserting_booking/"+pid+"/"+pname+"/"+qty+"/"+bdate+"/"+rdate+"/"+fid,{});
    //.do(res => console.log(res))
    //.map(res => res);
  }

}
