import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithbarcodeComponent } from './barcode/withbarcode/withbarcode.component';
import { WithoutbarcodeComponent } from './barcode/withoutbarcode/withoutbarcode.component';

@NgModule({
  declarations: [
    AppComponent,
    WithbarcodeComponent,
    WithoutbarcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
