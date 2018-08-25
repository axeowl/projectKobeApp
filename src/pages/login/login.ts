import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from './../../provider/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RestServiceProvider } from "../../providers/rest-service/rest-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  loading: Loading;
  registerCredentials = { email: 'benny@gmail.com', password: 'ippopotamo' };
  email: any;
  password: any;

  registerNewUser() : boolean
  {
    var tmpString = null;
    this.restProvider.validateUser(this.registerCredentials.email, this.registerCredentials.password)
      .then(data => {
        tmpString = JSON.stringify(data);
        if(tmpString == "false")
        {
          this.showError("Access Denied");
          return false;
        }
        else
        {
          this.registerCredentials.email = JSON.parse(tmpString).email;
          this.registerCredentials.password = JSON.parse(tmpString).password;
          this.email = JSON.parse(tmpString).email;
          this.password = JSON.parse(tmpString).password;
          this.auth.login(this.registerCredentials);

        }
      });

    return true;
  }
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public restProvider:RestServiceProvider) {
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }


  public login() {
    this.showLoading();
    if(this.registerNewUser())
    {
      setTimeout( data => {
        this.nav.push('TabsPage');
      }, 1500);
      /*this.nav.setRoot('TabsPage');
      this.nav.push('TabsPage');*/
    }

    /*if(this.email == "false" && this.password == "false")
    {
      this.showError("Access Denied");
    }
    else
    {
      this.auth.login(this.registerCredentials);
      this.showError("Access Permit");

    }*/

    /*this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          this.showError("Access Permit");
          this.nav.setRoot('TabsPage');
          this.nav.push(TabsPage);
        } else {

          this.nav.setRoot('TabsPage');
          this.nav.push('TabsPage');
        }
      },
      error => {
        this.showError(error);
      });*/
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
