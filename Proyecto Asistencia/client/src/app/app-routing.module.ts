import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonaNaturalMainComponent } from './components/persona-natural-main/persona-natural-main.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'PersonaNaturalMain',
    component: PersonaNaturalMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
