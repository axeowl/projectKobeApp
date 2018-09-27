import { Component } from '@angular/core';
import {NavController, IonicApp, MenuController} from 'ionic-angular';
import { AuthService } from './../../provider/auth-service';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { Login } from '../login/login';
import { TextToSpeech } from "@ionic-native/text-to-speech";

@Component({
  selector: 'projectKobe',
  templateUrl: 'home.html'
})
export class HomePage {

  username: any;
  email: any;
  products: any;


  getProducts() {
    this.products = null;
    this.restProvider.getUserInfo(this.email).then(data => {
      this.restProvider.getProducts(data["iduser"])
        .then(data => {
          this.products = data;
          console.log(data);
        });
    });

  }
  doRefresh(refresher) {

    this.getProducts();
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  doRefresh2()
  {
    this.getProducts();
    setTimeout(() => {
    }, 500);
  }
  deleteFunct(item, refresher)
  {
    console.log(item);
    this.restProvider.deleteProduct(item);
    this.doRefresh2();
    /*this.getProducts();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);*/

  }


  purchaseFunct(item, refresher)
  {
    console.log(item);
    this.restProvider.purchaseProduct(item);
    this.doRefresh2();
    /*this.getProducts();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);*/

  }
  isEmpty()
  {
    if (this.products.lenght == 0)
    {
      return true;
    }
    return false;
  }
  speech(itemName)
  {
    this.tts.speak(itemName)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  logout():void
  {
    this.auth.logout();
    this.navCtrl.parent.parent.setRoot(Login);
  }
  openMenu()
  {
    if(this.menuCtrl.isOpen())
      this.menuCtrl.close();
    else
      this.menuCtrl.open();
  }
  constructor(public menuCtrl: MenuController, public app: IonicApp,public navCtrl: NavController, private auth: AuthService, public restProvider: RestServiceProvider, public tts: TextToSpeech) {

    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];



  }
  ionViewWillEnter() {
    this.getProducts();
    this.doRefresh2();
  }
  ionViewDidLoad() {
    this.getProducts();
  }






}






