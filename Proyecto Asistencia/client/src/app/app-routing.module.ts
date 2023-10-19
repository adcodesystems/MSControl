import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CargoMainComponent } from './components/cargo-main/cargo-main.component'
import { PersonaNaturalSaveComponent } from './components/PersonaNatural/persona-natural-save/persona-natural-save.component';
import { PersonaNaturalMainComponent } from './components/PersonaNatural/persona-natural-main/persona-natural-main.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,pathMatch: 'full'
  },

  {
    path: 'cargoMain',
    component: CargoMainComponent
  },
  {
    path: 'PersonaNaturalMain',
    component: PersonaNaturalMainComponent
  },

  {
    path: 'PersonaNaturalSave/:id',
    component: PersonaNaturalSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
