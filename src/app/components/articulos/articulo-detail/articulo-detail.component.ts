import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.scss']
})
export class ArticuloDetailComponent implements OnInit {
  constructor( private articuloService: ArticuloService, private carritoService:CarritoService, private route: ActivatedRoute) { }
  _id:any;
  articulo:any;

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];
    this.articulo=this.articuloService.getArticulo(this._id);
  }

  addArticuloCarrito(articulo: Articulo, quantity: number) {
    this.carritoService.articulos.push({ articulo, quantity });
    console.log('Articulo añadido al carrito')
  }


}
