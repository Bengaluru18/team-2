import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoginProvider } from '../../providers/login/login';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public Alert: AlertController
  ,public getSalesman: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {

          this.getSalesman.getsalesman(this.id)
          .subscribe(data => {
            console.log(data.length)

            if(data.length>0){
              console.log("inside")
              console.log(data[0])
                this.goToList(data[0]);
            }
            else {
              console.log("outside")
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
          })

        //
/*
        }
        else{


        }

*/

  }

  goToList(param){
    this.navCtrl.push(ListPage,param);
  }

}
