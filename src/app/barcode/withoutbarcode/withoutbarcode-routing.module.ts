import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutbarcodeComponent } from './withoutbarcode.component';

const routes: Routes = [
  {
    path: '',
    component: WithoutbarcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutbarcodeRoutingModule { }
