import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.scss']
})
export class ArticuloDetailComponent implements OnInit {
  constructor( private articuloService: ArticuloService, private route: ActivatedRoute) { }
  _id:any;
  articulo:any;

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];
    this.articulo=this.articuloService.getArticulo(this._id);
  }

}
