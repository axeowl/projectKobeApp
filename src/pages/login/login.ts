import { Component } from '@angular/core';
import {NavController, AlertController, LoadingController, Loading} from 'ionic-angular';
import { AuthService } from './../../provider/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RestServiceProvider } from "../../providers/rest-service/rest-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  loading: Loading;
  registerCredentials = { email: 'benny.taccardi@gmail.com', password: 'benny' };
  email: any;
  password: any;
  app: any;

  validateUser()
  {
    let tmpString = null;
    this.restProvider.validateUser(this.registerCredentials.email, this.registerCredentials.password)
      .then(data => {
        tmpString = JSON.stringify(data);
        if(tmpString == "false")
        {
          this.showError("Access Denied");
        }
        else
        {
          this.registerCredentials.email = JSON.parse(tmpString).email;
          this.registerCredentials.password = JSON.parse(tmpString).password;
          this.email = JSON.parse(tmpString).email;
          this.password = JSON.parse(tmpString).password;
          this.auth.login(this.registerCredentials);
          this.showLoading();
          console.log("Hi");
          setTimeout( data => {
            this.nav.push('TabsPage');
          }, 1500);
        }
      });

  }
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public restProvider:RestServiceProvider) {

}

  public createAccount() {
    this.nav.push('RegisterPage');
  }


  public login() {
    this.validateUser();
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
