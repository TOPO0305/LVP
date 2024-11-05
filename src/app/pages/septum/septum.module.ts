import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeptumPageRoutingModule } from './septum-routing.module';

import { SeptumPage } from './septum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeptumPageRoutingModule
  ],
  declarations: [SeptumPage]
})
export class SeptumPageModule {}
