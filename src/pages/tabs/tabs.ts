import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';
import { SyncPage } from '../sync/sync';
import {NavController, IonicPage} from 'ionic-angular';
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
  tab3Root = CameraPage;
  tab4Root = SyncPage;

  constructor() {

  }
}
