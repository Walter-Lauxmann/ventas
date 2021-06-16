import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductosComponent } from './productos/detalle-productos/detalle-productos.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';

const routes: Routes = [
  {path: '', component: ListaProductosComponent},
  {path: 'detalle-producto/:id', component: DetalleProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
