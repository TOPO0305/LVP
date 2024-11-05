import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelixPageRoutingModule } from './helix-routing.module';

import { HelixPage } from './helix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelixPageRoutingModule
  ],
  declarations: [HelixPage]
})
export class HelixPageModule {}
