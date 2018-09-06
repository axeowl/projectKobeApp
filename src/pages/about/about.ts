import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Login} from "../login/login";
import { AuthService } from './../../provider/auth-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private auth: AuthService) {

  }



}
