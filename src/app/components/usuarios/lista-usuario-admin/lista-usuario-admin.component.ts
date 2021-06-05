import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuario-admin',
  templateUrl: './lista-usuario-admin.component.html',
  styleUrls: ['./lista-usuario-admin.component.scss']
})

  export class ListaUsuarioAdminComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        console.log(res)
        this.usuarioService.usuarios = res;
      },
      err => console.log(err)
    );
  }

  addUsuario(form: NgForm){
    if(form.value._id){
      console.log('actualizando');
      this.usuarioService.updateUsuario(form.value).subscribe(
        res =>{
          console.log(res);
          this.resetForm(form);
          this.getUsuarios();
        } ,
        err => console.error(err),      
      );
         
    }

    else{
      this.usuarioService.createUsuario(form.value).subscribe(
      res => {
        console.log(res)
        this.getUsuarios();
        form.reset();
      },
      err => console.log(err)
    );
    }
  }

  deleteUsuario(id: string){
    if(confirm("¿Estás seguro de que quieres borrar este usuario?")){
      this.usuarioService.deleteUsuario(id).subscribe(
        (res) => {
          this.getUsuarios();
        },
        (err) => console.log(err)
       );
       this.getUsuarios();
      }
    }

    editUsuario(usuario: Usuario) {
      this.usuarioService.formUsuario = usuario;
    }

  }

