import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { GetitemProvider } from '../../providers/getitem/getitem';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];


  products =[];
  items:any;
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public produtsGet: GetitemProvider ) {



    this.user=this.navParams.data;

    //this.products =[];
    this.produtsGet.getItems(this.user['cid'])
    .subscribe(data => {
      console.log(data[0])
      this.products=data
          this.items = this.products ;
          console.log(this.items)

    })
    console.log(this.product)



  }

  /*Added for search bar*/
  getItems(ev) {
    // Reset items back to all of the items
    this.items = this.products ;
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.pname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  productTapped(item) {
    // That's right, we're pushing to ourselves!
    console.log(item)
    this.navCtrl.push(BookingPage, {
      item: item
    });
  }
}
