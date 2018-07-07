import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.data['item'];
    console.log(this.item)
    console.log(this.item.p_name)
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad BookingPage');
  }

}
