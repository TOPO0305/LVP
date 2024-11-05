import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonroePage } from './monroe.page';

const routes: Routes = [
  {
    path: '',
    component: MonroePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonroePageRoutingModule {}
