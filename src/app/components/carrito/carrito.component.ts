import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ArticuloCarrito, CarritoService } from 'src/app/services/carrito.service';

declare var paypal: { Buttons: (arg0: { createOrder: (data: any, actions: any) => any; onApprove: (data: any, actions: any) => Promise<void>; onError: (err: any) => void; }) => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };


@Component({
  selector: 'carrito-component',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})


export class CarritoComponent implements OnInit {
  constructor(
    private carritoService: CarritoService
    ) { }
    
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef | undefined;
  
  aumentarCantidad(articuloCarrito: ArticuloCarrito, quantity: number): void {
    articuloCarrito.quantity += quantity;
    if (articuloCarrito.quantity < 1) {
      this.carritoService.removeArticulo(articuloCarrito);
    }
  }

  vaciarCarrito(): void {
    this.carritoService.articulos.length = 0;
  }


  paidFor = false;


  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Productos",
                amount: {
                  currency_code: 'USD',
                  value: this.total
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement?.nativeElement);
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