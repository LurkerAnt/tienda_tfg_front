import { Component, OnInit } from '@angular/core';
import { ArticuloCarrito, CarritoService } from 'src/app/services/carrito.service';
@Component({
  selector: 'carrito-component',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  constructor(
    private carritoService: CarritoService
  ) { }

  _increamentQTY(articuloCarrito: ArticuloCarrito, quantity: number): void {
    articuloCarrito.quantity += quantity;
    if (articuloCarrito.quantity < 1) {
      this.carritoService.removeArticulo(articuloCarrito);
    }
  }

  _emptyCart(): void {
    this.carritoService.articulos.length = 0;
  }

  ngOnInit(): void {
  }

  public get total(): number {
    if (this.carritoService.articulos.length === 0) {
      return 0;
    } 
    return this.carritoService.articulos
      .map(({ articulo, quantity }) => articulo.precio * quantity)
      .reduce((a, b) => a + b);
  }

  public get articulos(): ArticuloCarrito[] {
    return this.carritoService.articulos;
  }
}