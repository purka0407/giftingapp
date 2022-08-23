import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithbarcodeComponent } from './barcode/withbarcode/withbarcode.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./barcode/withbarcode/withbarcode.module').then(m => m.WithbarcodeModule)
  },
  {
    path: 'withoutbarcode',
    loadChildren: () => import('./barcode/withoutbarcode/withoutbarcode.module').then(m => m.WithoutbarcodeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
