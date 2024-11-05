import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmbligoPage } from './ombligo.page';

const routes: Routes = [
  {
    path: '',
    component: OmbligoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmbligoPageRoutingModule {}
