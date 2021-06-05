import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './components/articulos/articulo/articulo.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { IconsModule, MDBBootstrapModule, MdbIconComponent } from 'angular-bootstrap-md';
import { ArticuloDetailComponent } from './components/articulos/articulo-detail/articulo-detail.component';
import { ListaArticuloAdminComponent } from './components/articulos/lista-articulo-admin/lista-articulo-admin.component';
import { UserLoginComponent } from './components/forms/user-login/user-login.component';
import { AppRoutingModule } from './app-routing.module';
import { MdbFormsModule } from 'mdb-angular-ui-kit';
import { CambiarPasswordUserComponent } from './components/forms/cambiar-password-user/cambiar-password-user.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from './components/carrito/carrito.component';
import { Routes, RouterModule, RouterState } from '@angular/router';
import { UsuarioFormComponent } from './components/forms/usuario-form/usuario-form.component';
import { ListaUsuarioAdminComponent } from './components/usuarios/lista-usuario-admin/lista-usuario-admin.component';
import { SitemapComponent } from './components/navigation/sitemap/sitemap.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    FooterComponent,
    NavbarComponent,
    ArticuloDetailComponent,
    ListaArticuloAdminComponent,
    UserLoginComponent,
    CambiarPasswordUserComponent,
    UserInfoComponent,
    CarritoComponent,
    CambiarPasswordUserComponent,
    ListaUsuarioAdminComponent,
    UsuarioFormComponent,
    SitemapComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    MdbFormsModule,
    IconsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
