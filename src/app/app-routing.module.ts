import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloFormComponent } from './components/forms/articulo-form/articulo-form.component';
import { ArticuloDetailComponent } from './components/articulo-detail/articulo-detail.component';
import { ListaArticuloAdminComponent } from './components/lista-articulo-admin/lista-articulo-admin.component';


const routes: Routes = [
  {path: 'login', component: UserLoginComponent },
  {path: 'admin/listaArticulos', component: ListaArticuloAdminComponent },
  {path: 'articulos/new', component: ArticuloFormComponent},
  {path: 'articulos/:_id', component: ArticuloDetailComponent },
  {path: 'articulos', component: ArticuloComponent },
  {path: '', redirectTo: '/articulos', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
