import { Component } from '@angular/core';
import {NavController, IonicApp, MenuController} from 'ionic-angular';
import { AuthService } from './../../provider/auth-service';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { Login } from '../login/login';


@Component({
  selector: 'projectKobe',
  templateUrl: 'home.html'
})
export class HomePage {

  username: any;
  email: any;
  products: any;


  getProducts() {
    this.restProvider.getUserInfo(this.email).then(data => {
      this.restProvider.getProducts(data["iduser"])
        .then(data => {
          this.products = data;
          console.log(data);
        });
    });
  }

  deleteFunct(item)
  {
    console.log(item);
    this.restProvider.deleteProduct(item);
    this.getProducts();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  constructor(public menuCtrl: MenuController, public app: IonicApp,public navCtrl: NavController, private auth: AuthService, public restProvider: RestServiceProvider) {

    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];



  }
  ionViewDidEnter() {
    this.getProducts();
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
}






