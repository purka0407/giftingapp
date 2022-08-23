import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithbarcodeComponent } from './withbarcode.component';

const routes: Routes = [ {
  path: '',
  component: WithbarcodeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithbarcodeRoutingModule { }
