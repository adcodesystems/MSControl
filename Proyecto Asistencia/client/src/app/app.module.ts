import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarMenuComponent } from './components/Menu/sidebar-menu/sidebar-menu.component';
import { NavigationComponent } from './components/Menu/navigation/navigation.component';
import { CargoMainComponent } from './components/cargo-main/cargo-main.component';
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
import { PersonaNaturalSaveComponent } from './components/PersonaNatural/persona-natural-save/persona-natural-save.component';
import { PersonaNaturalMainComponent } from './components/PersonaNatural/persona-natural-main/persona-natural-main.component';
import { ImageModule } from 'primeng/image';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { LoginComponent } from './components/login/login.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    NavigationComponent,
    CargoMainComponent,
    PersonaNaturalSaveComponent,
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
    AvatarModule,AvatarGroupModule,
    ConfirmDialogModule, ConfirmPopupModule, ToolbarModule, ToastModule, PanelMenuModule, SidebarModule, InputSwitchModule],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
