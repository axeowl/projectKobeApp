import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from './../../provider/auth-service';
import { RestServiceProvider } from "../../providers/rest-service/rest-service";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };
  email: any;
  password: any;
  username: any;

  registerNewUser()
  {
    this.restProvider.registerNewUser(this.email,this.username,this.password);
  }
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, public restProvider: RestServiceProvider) { }

  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
        if (success) {
          let info = this.auth.getUserInfo();
          console.log(this.registerCredentials.password);
          this.email = this.registerCredentials.email;
          this.password = this.registerCredentials.password;
          this.username = this.email.slice(0,this.email.search('@'));
          this.createSuccess = true;
          this.registerNewUser();
          this.showPopup("Success", "Account created.");

        } else {
          this.showPopup("Error", "Problem creating account.");
        }
      },
      error => {
        this.showPopup("Error", error);
      });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
