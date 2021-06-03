import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../../services/usuario.service";
import { NgForm } from "@angular/forms";
import { Usuario } from "src/app/models/usuario";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }


  signUp(form:NgForm){
    this.usuarioService.signUp(form.value).subscribe(
      res=>console.log(res),
      err=>console.log(err),
    );
  }


}
