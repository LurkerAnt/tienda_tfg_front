import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/forms/user-login/user-login.component';
import { ArticuloComponent } from './components/articulos/articulo/articulo.component';
import { ArticuloDetailComponent } from './components/articulos/articulo-detail/articulo-detail.component';
import { ListaArticuloAdminComponent } from './components/articulos/lista-articulo-admin/lista-articulo-admin.component';
import { UsuarioFormComponent } from './components/forms/usuario-form/usuario-form.component';
import { CambiarPasswordUserComponent } from './components/forms/cambiar-password-user/cambiar-password-user.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';


const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UsuarioFormComponent},
  { path: 'admin/listaArticulos', component: ListaArticuloAdminComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'reset-password', component: CambiarPasswordUserComponent }, 
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
