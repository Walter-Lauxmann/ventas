import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { SubirArchivosService } from 'src/app/servicios/subir-archivos.service';
@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  id: any;
  items: any;
  producto: any;
  archivos: any = [];
  archivo = {
    nombre: null,
    nombreArchivo: null,
    base64textString: ''
  };
  datos: any = {
    resultado: null,
    mensaje: null
  };

  constructor(
    private route: ActivatedRoute, 
    private productosService: ProductosService,
    private subirArchivo: SubirArchivosService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id > 0) {
      this.obtenerProducto(this.id);
    } else {
      this.producto = this.productosService.producto;
    }
  }

  capturarImagen(event: any): any {
    let files = event.target.files;
    let file = files[0];
    this.archivo.nombreArchivo = file.name;
    this.producto.imagen = this.archivo.nombreArchivo;

    if(files && file) {
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent: any) {
    let binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload() {
    console.log(this.archivo);
    this.subirArchivo.subirArchivo(this.archivo).subscribe(
      res => { 
        this.datos = res;
        if(this.datos['resultado'] == 'OK') {
          alert(this.datos['mensaje']);
        }
      }
    );
  }

  obtenerProducto(id: any): void {
    this.productosService.getProducto(id)
    .subscribe(
      (res: any) => {
        this.items = res;
        this.producto = this.items[0];
        console.log(this.producto);
      },
      (error) => { console.log (error) }
    );
  }

  guardarProducto(id: any): void {
    this.productosService.guardarProducto(id, this.producto);
    alert('Producto guardado!');
  }

  eliminarProducto(id: any): void {
    let respuesta = confirm(`Desea eliminar a ${this.producto.nombre} ?`);
    if(respuesta == true) {
      this.productosService.eliminarProducto(id);
      alert(`${this.producto.nombre} ha sido eliminado!`)
    }
  }

  /* base64() {
    let extraerBase64 = async($event: any) => new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const unsafeImg = window.URL.createObjectURL($event);
          const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
          const reader = new FileReader();
          reader.readAsDataURL($event);
          reader.onload = () => {
            resolve({
              base: reader.result
            });
          };
          reader.onerror = error => {
            resolve({
              base: null
            });
          };
        } catch (e) {
          return null;
        }
      }, 100);
    });
    return extraerBase64;
  } */
  
  
}
