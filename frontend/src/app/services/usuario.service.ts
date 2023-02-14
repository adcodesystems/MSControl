import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { PersonaModel } from '../Models/PersonaModel';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  GetAcceso(usu:string,pwd :string) {
    return this.http.get(`/api/Usuario/GetAcceso/${usu}/${pwd}`);
  }
 
}
