import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PersonaNaturalMainComponent } from './components/persona-natural-main/persona-natural-main.component';
import { LoginComponent } from './components/login/login.component';
import { NavegacionComponent } from './components/Menu/navegacion/navegacion.component';
import { SidebarComponent } from './components/Menu/sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';

import { InputSwitchModule } from 'primeng/inputswitch';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavegacionComponent,
    PersonaNaturalMainComponent,
    LoginComponent,
  ],
  imports: [
    InputNumberModule,
    TabViewModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    StyleClassModule,
    CardModule,
    PanelModule, ImageModule, CalendarModule, DropdownModule, AutoCompleteModule, ProgressSpinnerModule,

    ConfirmDialogModule, ConfirmPopupModule, ToolbarModule, ToastModule, PanelMenuModule, SidebarModule, InputSwitchModule],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }