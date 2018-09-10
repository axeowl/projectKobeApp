  import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CameraPage } from '../pages/camera/camera';
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
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
  import {RegisterPageModule} from "../pages/register/register.module";
  import {LoginModule} from "../pages/login/login.module";
  import {SyncPageModule} from "../pages/sync/sync.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CameraPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabsPageModule,
    LoginModule,
    RegisterPageModule,
    SyncPageModule,
    HttpClientModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CameraPage,
    HomePage,
    TabsPage,
    SyncPage,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RestServiceProvider,
    Camera,
    BarcodeScanner
  ]
})
export class AppModule {}
