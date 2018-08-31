import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAPage } from './home-a';

@NgModule({
  declarations: [
    HomeAPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAPage),
  ],
})
export class HomeAPageModule {}
