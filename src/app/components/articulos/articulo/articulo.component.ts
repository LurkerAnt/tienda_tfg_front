import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo.service';
import { NgForm } from '@angular/forms';
import { Articulo } from 'src/app/models/articulo';
import { CarritoService } from 'src/app/services/carrito.service';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  constructor(public articuloService: ArticuloService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getArticulos() {
    this.articuloService.getArticulos().subscribe(
      res => {
        console.log(res)
        this.articuloService.articulos = res;
      },
      err => console.log(err)
    );
  }

  addArticulo(form: NgForm) {
    if (form.value._id) {
      console.log('actualizando');
      this.articuloService.updateArticulo(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      );
      this.resetForm(form);
      this.getArticulos();
    }

    else {
      this.articuloService.createArticulo(form.value).subscribe(
        res => {
          console.log(res)
          this.getArticulos();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteArticulo(id: string) {
    if (confirm("¿Estás seguro de que quieres borrar este artículo?")) {
      this.articuloService.deleteArticulo(id).subscribe(
        (res) => {
          this.getArticulos();
        },
        (err) => console.log(err)
      );
      this.getArticulos();
    }
  }

  editArticulo(articulo: Articulo) {
    this.articuloService.formArticulo = articulo;
  }

  //logica del carrito
  addArticuloCarrito(articulo: Articulo, quantity: number) {
    this.carritoService.articulos.push({ articulo, quantity });
    console.log('Articulo añadido al carrito')
  }


  products: Array<object> = [];
  _getProducts(): void {
    this.carritoService.getAllProducts().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
    });
  }
  _addItemToCart(id: any, quantity: number): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.carritoService.addToCart(payload).subscribe(() => {
      this._getProducts();
      alert('Product Added');
    });
  }

}