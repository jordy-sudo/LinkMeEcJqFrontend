import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modal-link-me',
    loadChildren: () => import('./Components/modal-link-me/modal-link-me.module').then( m => m.ModalLinkMePageModule)
  },
  {
    path: 'modal-delete',
    loadChildren: () => import('./Components/modal-delete/modal-delete.module').then( m => m.ModalDeletePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
