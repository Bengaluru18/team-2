import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { BookingProvider } from '../../providers/booking/booking';
import { ListPage } from '../list/list';
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
item:any;
qty:any;
borrowdate:any;
enddate:any;
user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public booking:BookingProvider,public Alert: AlertController
  ) {


    this.item=this.navParams.data['item'];
    this.user=this.navParams.data['user'];
    console.log(this.item)
    console.log(this.item.p_name)
    console.log(this.user)
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad BookingPage');
  }
  book(){
    console.log(this.item.pid,this.item.pname,this.qty,this.borrowdate,this.enddate)
    this.booking.book(this.item.pid,this.item.pname,this.qty,this.borrowdate,this.enddate,this.user.fid)
    .subscribe(data => {console.log(data)})
    let alert = this.Alert.create({
          title: 'Booking confirmed',
          message: 'Booking done ',
          buttons: [{
            text: 'Ok',
            handler: () => {
              console.log('Ok Clicked');
            }
          }],

        });
        alert.present();
       this.navCtrl.push(ListPage,this.user);
  }

}
