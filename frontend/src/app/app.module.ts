import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoconfiguracionmarcacionComponent } from './components/tipoconfiguracionmarcacion/tipoconfiguracionmarcacion.component';
import { TipoconfiguracionComponent } from './components/tipoconfiguracion/tipoconfiguracion.component';
import { SetupMarcacionComponent } from './components/setup-marcacion/setup-marcacion.component';
import { PreloginComponent } from './components/prelogin/prelogin.component';
import { PersonaNaturalFormComponent } from './components/persona-natural-form/persona-natural-form.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MarcacionComponent } from './components/marcacion/marcacion.component';
import { LoginComponent } from './components/login/login.component';
import { HorarioComponent } from './components/horario/horario.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoconfiguracionmarcacionComponent,
    TipoconfiguracionComponent,
    SetupMarcacionComponent,
    PreloginComponent,
    PersonaNaturalFormComponent,
    PageHomeComponent,
    MenuComponent,
    MarcacionComponent,
    LoginComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
