import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    MdbFormsModule,
    IconsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
