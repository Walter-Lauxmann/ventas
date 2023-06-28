export interface Producto {
    id: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    imagen: string;
    id_proveedor: number;
}
