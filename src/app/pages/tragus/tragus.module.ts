import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TragusPageRoutingModule } from './tragus-routing.module';

import { TragusPage } from './tragus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TragusPageRoutingModule
  ],
  declarations: [TragusPage]
})
export class TragusPageModule {}
