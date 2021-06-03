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


  async signUp(form:NgForm): Promise<void> {
    try {
      const response = await this.usuarioService.signUp(form.value).toPromise();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


}
