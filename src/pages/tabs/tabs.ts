import {Component, NgZone} from '@angular/core';
import {AboutPage} from '../about/about';
import {MapPage} from '../map/map';
import {HomePage} from '../home/home';
import {SyncPage} from '../sync/sync';
import {Events, IonicPage, Platform} from 'ionic-angular';
import {BeaconModel} from "../beacon/beacon-model";
import {BeaconProvider} from "../../provider/beacon-provider";
import {PurchasedPage} from "../purchased/purchased";

@IonicPage(
  {
    name: 'TabsPage'
  })
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = MapPage;
  tab4Root = SyncPage;
  tab5Root = PurchasedPage;
  beacons: BeaconModel[] = [];
  zone: any;

  constructor(public platform: Platform, public beaconProvider: BeaconProvider, public events: Events) {
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  ionViewDidLoad() {
    if (this.platform.is("cordova"))
    {
      this.platform.ready().then(() => {
        this.beaconProvider.initialise().then((isInitialised) => {
          if (isInitialised) {
            this.listenToBeaconEvents();
          }
        });
      });
    }
  }

  listenToBeaconEvents() {
    this.events.subscribe('provic', (data) => {

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

    function calculateDistance(rssi) {

      var txPower = -59; //hard coded power value. Usually ranges between -59 to -65

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
}
