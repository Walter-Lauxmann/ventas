import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  items = [];
  producto: Producto = {
    id: 0,
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: '',
    id_proveedor: 0,
  }
  url = 'http://localhost/api/modelos/datos.php?tabla=productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url + '&accion=seleccionar');
  }

  getProducto(id: any): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url + '&accion=seleccionar&id=' + id);
  }

  guardarProducto(id: any, datos: Producto) {
    if(id > 0) {
      this.http.post(this.url + '&accion=actualizar&id=' + id, datos)
      .subscribe(
        res => { console.log(res) },
        err => { console.log('Ocurrió un error')}
      );
    } else {
      this.http.post(this.url + '&accion=insertar&id=' + id, datos)
      .subscribe(
        res => { console.log(res) },
        err => { console.log('Ocurrió un error')}
      );
    }
  }

  eliminarProducto(id: any) {
    this.http.post(this.url + '&accion=eliminar&id=' + id, {})
    .subscribe(
      res => { console.log(res) },
      err => { console.log('Ocurrió un error')}
    );
  }
}
