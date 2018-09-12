import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../provider/auth-service';
import {RestServiceProvider} from "../../providers/rest-service/rest-service";
import {IBeacon} from "@ionic-native/ibeacon";
import  { NgZone } from "@angular/core";
import { BeaconProvider } from "../beacon/beacon";
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
  zone:any;

  constructor(public navCtrl: NavController, public platform: Platform, private auth: AuthService, public http: HttpClient, public restProvider: RestServiceProvider, private ibeacon: IBeacon, public beaconProvider: BeaconProvider, public events: Events) {

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

    this.zone = new NgZone({ enableLongStackTrace: false });

  }
  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.beaconProvider.initialise().then((isInitialised) => {
        if (isInitialised) {
          this.listenToBeaconEvents();
        }
      });
    });
  }

  listenToBeaconEvents() {
    this.events.subscribe('didRangeBeaconsInRegion', (data) => {

// update the UI with the beacon list
      this.zone.run(() => {

        this.beacons = [];

        let beaconList = data.beacons;
        beaconList.forEach((beacon) => {
          let beaconObject = new BeaconModel(beacon);
          this.beacons.push(beaconObject);
        });

      });

    });
  }


}
