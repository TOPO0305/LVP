import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelixPage } from './helix.page';

const routes: Routes = [
  {
    path: '',
    component: HelixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelixPageRoutingModule {}
