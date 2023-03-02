import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloginComponent } from './components/prelogin/prelogin.component';
import { LoginComponent } from './components/login/login.component';
import { PersonaNaturalFormComponent } from './components/persona-natural-form/persona-natural-form.component';
import { PersonaNaturalMainComponent } from './components/persona-natural-main/persona-natural-main.component';
import { MarcacionComponent } from './components/marcacion/marcacion.component';
import { TipoconfiguracionmarcacionComponent } from './components/tipoconfiguracionmarcacion/tipoconfiguracionmarcacion.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { SetupMarcacionComponent } from './components/setup-marcacion/setup-marcacion.component';
import { HorarioComponent } from './components/horario/horario.component';
import { HorarioMainComponent } from './components/horario-main/horario-main.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'prelogin',
    component: PreloginComponent
  },
  {
    path: 'marcacion',
    component: MarcacionComponent
  },
  {
    path: 'MainPersona',
    component: PersonaNaturalMainComponent
  },
  {
    path: 'Persona',
    component: PersonaNaturalFormComponent
  },
  {
    path: 'TipoConfiguracionMarcacion',
    component: TipoconfiguracionmarcacionComponent
  },
  {
    path: 'Home',
    component: PageHomeComponent
  }, 
  {
    path: 'SetupMarcacion',
    component: SetupMarcacionComponent
  },
  {
    path: 'Horario',
    component: HorarioComponent
  },
  {
    path: 'HorarioMain',
    component: HorarioMainComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
