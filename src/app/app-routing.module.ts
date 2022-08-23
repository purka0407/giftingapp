import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithbarcodeComponent } from './barcode/withbarcode/withbarcode.component';
import { WithoutbarcodeComponent } from './barcode/withoutbarcode/withoutbarcode.component';

const routes: Routes = [
  {path: "", component:WithbarcodeComponent},
  {path: "withoutbarcode", component:WithoutbarcodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
