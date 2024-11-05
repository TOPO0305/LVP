import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TragusPage } from './tragus.page';

const routes: Routes = [
  {
    path: '',
    component: TragusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TragusPageRoutingModule {}
