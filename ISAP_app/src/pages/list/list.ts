import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];


  products: Array<{p_name:string, pid:string, Total_no:string, avail:string, cid: string, price:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];


    this.products =[];

    for (let i = 1; i < 11; i++) {
      this.products.push({
        p_name:"Item name is "+i,
         pid:i+i*2,
          Total_no:"3",
           avail:"1 available",
         cid: i+i*3,
         price: "100rs"

      });
    }
  }

  productTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
