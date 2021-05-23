import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloFormComponent } from './components/forms/articulo-form/articulo-form.component';


const routes: Routes = [
  {path: 'login', component: UserLoginComponent },
  {path: 'articulos', component: ArticuloComponent },
  {path: 'articulos/:_id', component: ArticuloFormComponent },
  {path: '', redirectTo: '/articulos', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
