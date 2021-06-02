import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.scss']
})
export class ArticuloDetailComponent implements OnInit {
  articulo:any;
  constructor( private articuloService: ArticuloService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.articulo = this.articuloService.getArticulo(+this.route.snapshot.params['_id']
    );
  }

}
