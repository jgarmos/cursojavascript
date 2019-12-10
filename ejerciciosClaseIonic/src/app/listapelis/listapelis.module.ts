import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapelisPageRoutingModule } from './listapelis-routing.module';

import { ListapelisPage } from './listapelis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapelisPageRoutingModule
  ],
  declarations: [ListapelisPage]
})
export class ListapelisPageModule {}
