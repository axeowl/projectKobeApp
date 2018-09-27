import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../provider/auth-service';
import {RestServiceProvider} from "../../providers/rest-service/rest-service";
import {IBeacon} from "@ionic-native/ibeacon";
import  { NgZone } from "@angular/core";
import { BeaconProvider } from "../../provider/beacon-provider";
import { BeaconModel } from "../beacon/beacon-model";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  username: any;
  email: any;
  isConnected: any;
  beacons: BeaconModel[] = [];
  distance: any[] = [];
  zone: NgZone;

  constructor(public navCtrl: NavController, public platform: Platform, private auth: AuthService, public http: HttpClient, public restProvider: RestServiceProvider, private ibeacon: IBeacon, public beaconProvider: BeaconProvider, public events: Events) {

    this.username = this.auth.getUserInfo()["name"];
    this.email = this.auth.getUserInfo()["email"];
    this.http.get('https://projectkobe.herokuapp.com/issynchronized'+this.email+'').subscribe(data => {
      var str = JSON.stringify(data);
      this.isConnected = data["isConnected"];
      if(this.isConnected == 1)
      {
        this.isConnected = "Si";
      }
      else {
        this.isConnected = "No";
      }
    });

  }


}
