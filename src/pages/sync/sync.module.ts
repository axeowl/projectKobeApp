import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyncPage } from './sync';
import {NgxQRCodeModule} from "ngx-qrcode2";

@NgModule({
  declarations: [
    SyncPage,
  ],
  imports: [
    IonicPageModule.forChild(SyncPage),
    NgxQRCodeModule
  ],
})
export class SyncPageModule {}
