import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../../services/usuario.service";
import { NgForm } from "@angular/forms";
import { Usuario } from "src/app/models/usuario";
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"],
})
export class UserLoginComponent implements OnInit {

  constructor(public usuarioService: UsuarioService,private authService: AuthService,
    private router: Router) {
    
   }

  ngOnInit(): void {
  }


  signIn(form:NgForm){
    var auth: AuthService;
    this.usuarioService.signIn(form.value).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',JSON.stringify(res));
        this.router.navigate(['/']);
        },
      err=>console.log(err),
      
    );
  }
}
