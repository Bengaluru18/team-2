import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
credentials = { email: '', password: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams,public Alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {

        if(this.credentials.email === "admin" && this.credentials.password === "admin") {
          this.goToList(this.credentials.email);
        }
        else{
          let alert = this.Alert.create({
                title: 'Invalid credentials',
                message: 'Please register with ISAP ',
                buttons: [{
                  text: 'Ok',
                  handler: () => {
                    console.log('Ok Clicked');
                  }
                }],

              });
              alert.present();
        }

    

  }

  goToList(email){
    this.navCtrl.push(ListPage);
  }

}
