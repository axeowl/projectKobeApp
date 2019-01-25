  import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { HomePage} from '../pages/home/home';
import { SyncPage } from '../pages/sync/sync';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { AuthService } from './../provider/auth-service';
import { Login } from '../pages/login/login';
import { OneSignal } from '@ionic-native/onesignal';
import { TabsPageModule } from "../pages/tabs/tabs.module";
import { RestServiceProvider } from '../providers/rest-service/rest-service';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {RegisterPageModule} from "../pages/register/register.module";
import {LoginModule} from "../pages/login/login.module";
import {SyncPageModule} from "../pages/sync/sync.module";
import { IBeacon } from "@ionic-native/ibeacon";
import { BeaconProvider } from "../provider/beacon-provider";
import { Device } from '@ionic-native/device';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { TextToSpeech } from "@ionic-native/text-to-speech";
import {PurchasedPage} from "../pages/purchased/purchased";
import {PurchasedPageModule} from "../pages/purchased/purchased.module";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { GoogleMapComponent } from '../components/google-map/google-map'
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationService } from '@ionic-native/google-maps';


  @NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabsPageModule,
    LoginModule,
    RegisterPageModule,
    SyncPageModule,
    PurchasedPageModule,
    HttpClientModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    SyncPage,
    PurchasedPage,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    OneSignal,
    [BeaconProvider],
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RestServiceProvider,
    Camera,
    BarcodeScanner,
    IBeacon,
    Device,
    LocalNotifications,
    TextToSpeech,
    LaunchNavigator,
    NativeGeocoder,
    Geolocation,
    LocationService
  ]
})
export class AppModule {}
