import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PersonaModel } from '../Models/PersonaModel';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  API_URI = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get(`${this.API_URI}/Get_PersonaNaturalItems`)
  }
  PersonasaveGame(person: PersonaModel) {
    return this.http.post(`${this.API_URI}/Post_PersonaNatural_Insert`, person);
  }

  PersonaDelete(Id: number) {
    return this.http.delete(`${this.API_URI}/PersonaNatural_Delete/${Id}`);
  }
  PersonasUpdate(person: PersonaModel) {
    return this.http.post(`${this.API_URI}/update_PersonaNatural_Insert`, person);
  }

}
