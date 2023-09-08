import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { ModalController } from '@ionic/angular';
import { ModalLinkMePage } from '../Components/modal-link-me/modal-link-me.page';
import { ModalDeletePage } from '../Components/modal-delete/modal-delete.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  async openEditModal(product: Product) {
    const modal = await this.modalController.create({
      component: ModalLinkMePage,
      componentProps: {
        action: 'update',
        product,
      },
    });

    modal.onDidDismiss().then(() => {
      this.loadProducts();
    });

    return await modal.present();
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: ModalLinkMePage,
      componentProps: {
        action: 'create',
      },
    });

    modal.onDidDismiss().then(() => {
      this.loadProducts();
    });

    return await modal.present();
  }

  async openDeleteModal(product: Product) {
    const modal = await this.modalController.create({
      component: ModalDeletePage,
      componentProps: {
        action: 'delete',
        productId : product.id,
      },
    });

    modal.onDidDismiss().then(() => {
      this.loadProducts();
    });

    return await modal.present();
  }

}
