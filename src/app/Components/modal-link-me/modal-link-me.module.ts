import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLinkMePageRoutingModule } from './modal-link-me-routing.module';

import { ModalLinkMePage } from './modal-link-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLinkMePageRoutingModule
  ],
  declarations: [ModalLinkMePage]
})
export class ModalLinkMePageModule {}
