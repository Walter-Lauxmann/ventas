import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivosService {
  URL = "http://localhost/api/modelos/";

  constructor(private http: HttpClient) { }

  subirArchivo(archivo: any) {
    return this.http.post(`${this.URL}subirarchivo.php`, JSON.stringify(archivo));
  }
}
