import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario} from "../models/usuario";
import { signIn } from "../models/signIn";
import { DatePipe, formatDate } from '@angular/common';
import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';
@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  URL_API = "http://localhost:3000/usuarios";

  //array de usuarios

  usuarios!: Usuario[];

  // formulario de registro admin

  formUsuario: Usuario = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    fecha: new Date,
    admin: false,
  };

  // formulario de registro signUp
  signUpForm: Usuario = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    fecha: new Date,
    admin: false,
  };

  signInForm: signIn = {
    email: "",
    password: "",
  };

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<Usuario[]>(this.URL_API);
  }

  gerUsuario(id: string) {
    return this.usuarios?.find((usuario) => usuario._id === id);
  }
  createUsuario(formUsuario: Usuario) {
    return this.http.post(`${this.URL_API}/create`, formUsuario);
  }

  updateUsuario(usuario: Usuario) {
    return this.http.put(`${this.URL_API}/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  cambiarPassword(usuario: Usuario) {
    return this.http.put(
      `${this.URL_API}/changePassword${usuario._id}`,
      usuario.password
    );
  }
  signUp(signUpForm: Usuario) {
    return this.http.post(`${this.URL_API}/signUp`, signUpForm);
  }
  signIn(signInForm: signIn) {
    return this.http.post(`${this.URL_API}/signIn`, signInForm);
  }
}
