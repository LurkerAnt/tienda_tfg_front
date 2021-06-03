import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/forms/user-login/user-login.component';
import { ArticuloComponent } from './components/articulos/articulo/articulo.component';
import { ArticuloDetailComponent } from './components/articulos/articulo-detail/articulo-detail.component';
import { ListaArticuloAdminComponent } from './components/articulos/lista-articulo-admin/lista-articulo-admin.component';
import { UsuarioFormComponent } from './components/forms/usuario-form/usuario-form.component';
import { CambiarPasswordUserComponent } from './components/forms/cambiar-password-user/cambiar-password-user.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ArticuloDetailRouteActivator } from './components/articulos/articulo-detail/articulo-detail-route-activator.service'
import { Error404Component } from './errors/404.component';
import { ListaUsuarioAdminComponent } from './components/usuarios/lista-usuario-admin/lista-usuario-admin.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'register', component: UsuarioFormComponent },
  { path: 'perfil', component: UserInfoComponent },
  { path: 'reset-password', component: CambiarPasswordUserComponent },
  { path: 'articulos/:_id', component: ArticuloDetailComponent, canActivate: [ArticuloDetailRouteActivator] },
  { path: 'articulos', component: ArticuloComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/articulos', pathMatch: 'full' },
  { path: 'signIn', component: UserLoginComponent },
  { path: 'signUp', component: UserInfoComponent },
  { path: 'signup2', component: UsuarioFormComponent },
  {
    path: 'admin', children: [
      { path: 'lista-articulos', component: ListaArticuloAdminComponent },
      { path: 'lista-usuarios', component: ListaUsuarioAdminComponent },
    ]
  },
  {
    path: 'user', children: [
      { path: 'cambiarPassword', component: CambiarPasswordUserComponent }
    ]
  }
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
