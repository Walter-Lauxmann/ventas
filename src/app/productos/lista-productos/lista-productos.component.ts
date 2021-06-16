import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: any ;
  
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos()
    .subscribe(
      (res: any) => {this.productos = res; }, 
      (error) => {console.log(error); }
      );
  }

}
