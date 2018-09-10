import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../provider/auth-service';
import {RestServiceProvider} from "../../providers/rest-service/rest-service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  username: any;
  email: any;
  isConnected: any;

  constructor(public navCtrl: NavController, private auth: AuthService, public http: HttpClient, public restProvider: RestServiceProvider) {

    this.username = this.auth.getUserInfo()["name"];
    this.email = this.auth.getUserInfo()["email"];
    this.http.get('https://projectkobe.herokuapp.com/issynchronized'+this.email+'').subscribe(data => {
      var str = JSON.stringify(data);
      this.isConnected = data["isConnected"];
      if(this.isConnected)
      {
        this.isConnected = "Si";
      }
      else {
        this.isConnected = "No";
      }
    });
  }




}
