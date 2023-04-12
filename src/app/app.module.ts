import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosComponent } from './datos/datos.component';
import { HeaderComponent } from './header/header.component';
import { FacturaComponent } from './factura/factura.component';

@NgModule({
  declarations: [			
    AppComponent,
      DatosComponent,
      HeaderComponent,
      FacturaComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
