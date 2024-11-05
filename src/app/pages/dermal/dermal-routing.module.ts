import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DermalPage } from './dermal.page';

const routes: Routes = [
  {
    path: '',
    component: DermalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DermalPageRoutingModule {}
