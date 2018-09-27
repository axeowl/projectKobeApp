  import { Injectable } from '@angular/core';
  import { Platform, Events } from 'ionic-angular';
  import { IBeacon} from "@ionic-native/ibeacon";
  import {ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications';
  import {HttpClient} from "@angular/common/http";


  /*
    Generated class for the BeaconProvider provider.
    See https://angular.io/docs/ts/latest/guide/dependency-injection.html
    for more info on providers and Angular 2 DI.
  */
  declare let cordova: any;
  @Injectable()
  export class BeaconProvider {

    delegate: any;
    region: any;
    constructor(public platform: Platform, public events: Events, public ibeacon: IBeacon, public localNotifications: LocalNotifications, public http: HttpClient) {
    }

    /*initialise(): any {
      this.region = [];
      this.http.get('https://projectkobe.herokuapp.com/getmarket').subscribe(data => {

        let promise = new Promise((resolve, reject) => {
          // we need to be running on a device
          if (this.platform.is('cordova')) {

            // Request permission to use location on iOS
            this.ibeacon.requestAlwaysAuthorization();

            // create a new delegate and register it with the native layer
            this.delegate = this.ibeacon.Delegate();

            // Subscribe to some of the delegate's event handlers
            this.delegate.didRangeBeaconsInRegion()
              .subscribe(
                data => {

                  this.events.publish('didRangeBeaconsInRegion', data);
                },
                error => console.error()
              );

            // setup a beacon region
            for(let i = 0;i<2;i++)
            {
              this.region[i] = this.ibeacon.BeaconRegion('deskBeacon' + i, data[i].UUID);
              alert(data[i].UUID);
            }

            // start ranging
            for(let i = 0; i<2; i++)
            {
              this.ibeacon.startRangingBeaconsInRegion(this.region[i])
                .then(
                  () => {
                    resolve(true);
                    alert("Ciao");
                  },
                  error => {
                    console.error('Failed to begin monitoring: ', error);
                    resolve(false);
                  }
                );

            }



          } else {
            console.error("This application needs to be running on a device");
            resolve(false);
          }
        });

        return promise;
      });


    }*/


    initialise(): any {
      this.region = [];
      this.http.get('https://projectkobe.herokuapp.com/getmarket').subscribe(data => {
        let promise = new Promise((resolve, reject) => {
          // we need to be running on a device
          if (this.platform.is('cordova')) {

            // Request permission to use location on iOS
            this.ibeacon.requestAlwaysAuthorization();

            // create a new delegate and register it with the native layer
            this.delegate = this.ibeacon.Delegate();

            for(let i = 0;i<2;i++)
            {
              this.region[i] = this.ibeacon.BeaconRegion(data[i].name , data[i].UUID);
            }

            // Subscribe to some of the delegate's event handlers
            let self = this.localNotifications;
            this.delegate.didDetermineStateForRegion = function (pluginResult) {
              if (pluginResult.state == "CLRegionStateInside") {
                self.schedule({
                  title: 'ProjectKobe',
                  lockscreen: true,
                  id: 1,
                  text: 'Nelle vicinanze c\'è un supermercato',
                  sound: 'file://sound.mp3'
                });
              }
            };

            this.delegate.didStartMonitoringForRegion = function (pluginResult) {
              console.log('didStartMonitoringForRegion:', pluginResult);

              //alert('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
            };

            this.delegate.didRangeBeaconsInRegion = function (pluginResult) {
              //alert('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
            };

            cordova.plugins.locationManager.setDelegate(this.delegate);

  // required in iOS 8+
            cordova.plugins.locationManager.requestWhenInUseAuthorization();
  // or cordova.plugins.locationManager.requestAlwaysAuthorization()

            for(let i = 0; i<2; i++)
            {
              cordova.plugins.locationManager.startMonitoringForRegion(this.region[i])
                .fail(function (e) {
                  console.error(e);
                })
                .done();
            }



          } else {
            console.error("This application needs to be running on a device");
            resolve(false);
          }
        });
        return promise;
      });

        }

  }
