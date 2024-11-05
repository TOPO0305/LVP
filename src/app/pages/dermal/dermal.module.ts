import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DermalPageRoutingModule } from './dermal-routing.module';

import { DermalPage } from './dermal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DermalPageRoutingModule
  ],
  declarations: [DermalPage]
})
export class DermalPageModule {}
