import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconsModule, MDBBootstrapModule, MdbIconComponent } from 'angular-bootstrap-md';
import { ArticuloDetailComponent } from './components/articulo-detail/articulo-detail.component';
import { ListaArticuloAdminComponent } from './components/lista-articulo-admin/lista-articulo-admin.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AppRoutingModule } from './app-routing.module';
import { MdbFormsModule } from 'mdb-angular-ui-kit';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    FooterComponent,
    NavbarComponent,
    ArticuloDetailComponent,
    ListaArticuloAdminComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    MdbFormsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }