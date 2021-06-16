import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  id: any;
  items: any;
  producto: any;
  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.obtenerProducto(this.id);
    } else {
      this.producto = this.productosService.producto;
    }
    
  }

  obtenerProducto(id: any): void {
    this.productosService.getProducto(id)
      .subscribe(
        (res: any) => {
          this.items = res; 
          this.producto = this.items[0]; 
          console.log(this.producto);
        },
        (error) => {console.log(error); }
      );
  }

}
