import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../../services/usuario.service";
import { NgForm } from "@angular/forms";
import { Usuario } from "src/app/models/usuario";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"],
})
export class UserLoginComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }


  signIn(form:NgForm){
    var auth: AuthService;
    this.usuarioService.signIn(form.value).subscribe(
      res=>{
        console.log(res);
        auth.setLocalStorage;
        auth.isLoggedIn},
      err=>console.log(err),
      
    );
  }
}
