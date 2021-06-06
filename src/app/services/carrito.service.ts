import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';

export interface ArticuloCarrito {
  articulo: Articulo;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  URL_API = 'http://localhost:4200'

  
  constructor(private http:HttpClient) { }
  
  public articulos: ArticuloCarrito[] = [];

  public removeArticulo(articulo: ArticuloCarrito) {
    const index = this.articulos.indexOf(articulo);
    if (index > -1) {
      this.articulos.splice(index, 1);
    }
  }
 
}
