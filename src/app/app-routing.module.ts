import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloDetailComponent } from './components/articulo-detail/articulo-detail.component';
import { ListaArticuloAdminComponent } from './components/lista-articulo-admin/lista-articulo-admin.component';
import { UsuarioFormComponent } from './components/forms/usuario-form/usuario-form.component';


const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UsuarioFormComponent},
  { path: 'admin/listaArticulos', component: ListaArticuloAdminComponent },
  { path: 'articulos/:_id', component: ArticuloDetailComponent },
  { path: 'articulos', component: ArticuloComponent },
  { path: '', redirectTo: '/articulos', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { scrollOffset: [0, 140] })

  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {


}