import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLinkMePage } from './modal-link-me.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLinkMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLinkMePageRoutingModule {}
