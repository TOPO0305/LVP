import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeptumPage } from './septum.page';

const routes: Routes = [
  {
    path: '',
    component: SeptumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeptumPageRoutingModule {}
