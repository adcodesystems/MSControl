import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  GetTurnoItems() {
    return this.http.get(`/api/Turno/GetTurnoItems/`);
  }

  GetModalidadHorarioItems() {
    return this.http.get(`/api/General/Get_ModalidadHorarioItems/`);
  }

  GetTipoHorarioItems() {
    return this.http.get(`/api/General/Get_TipoHorarioItems/`);
  }
}
