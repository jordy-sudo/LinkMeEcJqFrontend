import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-modal-link-me',
  templateUrl: './modal-link-me.page.html',
  styleUrls: ['./modal-link-me.page.scss'],
})
export class ModalLinkMePage  {
  @Input() action: 'create' | 'update' = 'create'; 
  @Input() product: Product | undefined ;
  constructor(
    private modalController: ModalController,
    private productService: ProductService,
    private toastController: ToastController
  ) {
    this.product = {} as Product;
  }

  async saveChanges() {
    if (this.product) {
      if (this.action === 'create') {
        this.productService.createProduct(this.product).subscribe(
          async () => {
            await this.presentToast('Producto creado con éxito'); 
            this.closeModal();
          },
          async (error) => {
            await this.presentToast('Error al crear el producto'); 
            console.log(error);
          }
        );
      } else if (this.action === 'update') {
        this.productService.updateProduct(this.product).subscribe(
          async (response) => {
            await this.presentToast('Producto actualizado con éxito');
            console.log(response);
            this.closeModal();
          },
          async (error) => {
            await this.presentToast('Error al actualizar el producto'); 
            console.log(error);
          }
        );
      }
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000, 
      position: 'bottom', 
    });
    toast.present();
  }


}
