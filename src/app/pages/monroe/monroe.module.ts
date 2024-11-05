import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonroePageRoutingModule } from './monroe-routing.module';

import { MonroePage } from './monroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonroePageRoutingModule
  ],
  declarations: [MonroePage]
})
export class MonroePageModule {}
