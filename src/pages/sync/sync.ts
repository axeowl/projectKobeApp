import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../provider/auth-service";

/**
 * Generated class for the SyncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sync',
  templateUrl: 'sync.html',
})
export class SyncPage {

  qrData = "ciao";
  createdCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,  private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.qrData = info['email'];
    this.http.get('https://projectkobe.herokuapp.com/userinfo'+this.qrData).subscribe(data => {
      var str = JSON.stringify(data);
      str = str.substring(str.indexOf(":") +2);
      str = str.substring(0,str.indexOf("\""));
      this.qrData = str;
      this.createdCode = this.qrData;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncPage');
  }

}
