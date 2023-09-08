import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductService } from 'src/app/product.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.page.html',
  styleUrls: ['./modal-delete.page.scss'],
})
export class ModalDeletePage  {

  @Input() productId: string = '';

  constructor(
    private modalController: ModalController,
    private productService: ProductService,
    private toastController: ToastController
  ) {}

  async confirmDelete() {
    this.productService.deleteProduct(this.productId).subscribe(
      async () => {
        await this.presentToast('Producto eliminado con éxito');
        this.modalController.dismiss({ confirmed: true });
      },
      async (error) => {
        console.error('Error al eliminar el producto:', error);
        await this.presentToast('Error al eliminar el producto');
        this.modalController.dismiss({ confirmed: false });
      }
    );
  }

  dismiss() {
    this.modalController.dismiss({ confirmed: false });
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000, 
      position: 'top', 
      color: 'danger' 
    });
    toast.present();
  }
}
