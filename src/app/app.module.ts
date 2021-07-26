import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import { SstComponent } from './sst/sst.component';
import { LoginComponent } from './auth/login/login.component';


import { RegistrarUsuariosComponent } from './auth/registrar-usuarios/registrar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SstComponent,
    LoginComponent,
    RegistrarUsuariosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
