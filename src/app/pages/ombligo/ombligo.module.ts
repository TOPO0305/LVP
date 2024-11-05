import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmbligoPageRoutingModule } from './ombligo-routing.module';

import { OmbligoPage } from './ombligo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmbligoPageRoutingModule
  ],
  declarations: [OmbligoPage]
})
export class OmbligoPageModule {}
