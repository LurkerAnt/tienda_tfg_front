import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent implements OnInit {

  constructor(public articuloService: ArticuloService) {}

  ngOnInit(): void {  
    this.getArticulos();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getArticulos(){
    this.articuloService.getArticulos().subscribe(
      res => {
        console.log(res)
        this.articuloService.articulos = res;
      },
      err => console.log(err)
    );
  }

  addArticulo(form: NgForm){
    if(form.value.id){
      console.log('actualizando');
      this.articuloService.updateArticulo(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      );    
    }

    else{
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

  deleteArticulo(id: string){
    if(confirm("¿Estás seguro de que quieres borrar este artículo?")){
      this.articuloService.deleteArticulo(id).subscribe(
        (res) => {
          this.getArticulos();
        },
        (err) => console.log(err)
       );
      }
    }

    editArticulo(articulo: Articulo) {
      this.articuloService.formArticulo = articulo;
    }


}
