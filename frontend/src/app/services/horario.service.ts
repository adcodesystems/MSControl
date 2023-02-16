import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HorarioModel } from '../Models/Horario/HorarioModel';
import { HorarioPrueba } from '../Models/Horario/HorarioPrueba';

@Injectable({
  providedIn: 'root'
})
export class HorarioService{
  constructor(private http: HttpClient) { }

  // SaveHorario(Horar: HorarioModel) {
  //   return this.http.post(`${this.API_URI}/api/Horario_Insert/`, Horar);
  // }
  
  SaveHorarioPrueba(Horar: HorarioPrueba) {
    return this.http.post(`/api/Horario_InsertPrueba/`, Horar);
  }
  // PersonasaveGame(person: PersonaModel) {
  //   return this.http.post(`${this.API_URI}/Post_PersonaNatural_Insert`, person);
  // }


}
