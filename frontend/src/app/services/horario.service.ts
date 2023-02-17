import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HorarioSaveModel } from '../Models/Horario/HorarioSaveModel';
import { HorarioPrueba } from '../Models/Horario/HorarioPrueba';
@Injectable({
  providedIn: 'root'
})
export class HorarioService{
  API_URI = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  SaveHorario(Horar: HorarioSaveModel) {
    return this.http.post(`/api/Horario_Insert/`, Horar);
  }
  SaveHorarioPrueba(Horar: HorarioPrueba) {
    return this.http.post(`/api/Horario_InsertPrueba/`, Horar);
  }
  // PersonasaveGame(person: PersonaModel) {
  //   return this.http.post(`${this.API_URI}/Post_PersonaNatural_Insert`, person);
  // }


}
