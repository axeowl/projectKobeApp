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
          this.distance.push(this.calculateDistance(beacon.rssi));
          this.beacons.push(beaconObject);
        });

      });

    });
  }

  calculateDistance(rssi) {

    var txPower = -59 //hard coded power value. Usually ranges between -59 to -65

    if (rssi == 0) {
      return -1.0;
    }

    var ratio = rssi*1.0/txPower;
    if (ratio < 1.0) {
      return Math.pow(ratio,10);
    }
    else {
      var distance =  (0.89976)*Math.pow(ratio,7.7095) + 0.111;
      return distance;
    }
  }

}
