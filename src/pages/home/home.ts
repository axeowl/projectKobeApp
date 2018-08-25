import { Component, NgZone} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { AuthService } from './../../provider/auth-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { Login } from '../login/login';


@Component({
  selector: 'projectKobe',
  templateUrl: 'home.html'
})
export class HomePage {

  /*lat: any;
  lon: any;*/
  username: any;
  email: any;
  products: any;

  getProducts() {
    this.restProvider.getProducts()
      .then(data => {
        this.products = data;
        console.log(this.products);
      });
  }

  deleteFunct(item)
  {
    this.restProvider.deleteProduct(item);
    this.getProducts();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  logout()
  {
    this.auth.logout();
    this.navCtrl.push(Login);
  }
  constructor(public navCtrl: NavController, private backgroundGeolocation: BackgroundGeolocation, public zone: NgZone, private auth: AuthService, public restProvider: RestServiceProvider) {

    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    /*this.products = this.httpClient.get('http://127.0.0.1:8000/product');
    this.products
      .subscribe(( res: Response ) => {
        console.log('my data: ', res);
      });*/

    /*const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };
    this.backgroundGeolocation.configure(config).subscribe((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lon = location.longitude;
      });

    }, (err) => {

      console.log(err);

    });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();*/



  }
  ionViewDidEnter() {
    this.getProducts();
  }
}






