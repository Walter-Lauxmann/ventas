import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SubirArchivosService } from './servicios/subir-archivos.service';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { DetalleProductosComponent } from './productos/detalle-productos/detalle-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListaProductosComponent,
    DetalleProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,  
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    SubirArchivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
