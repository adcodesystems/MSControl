import { Component, OnInit, HostBinding }   from '@angular/core';


import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(protected Usuariosservices: UsuarioService) { }
  ngOnInit() {

    this.Usuariosservices.GetAcceso('dtimo', '123').subscribe(
      res => {
        console.log(res);
       
      }
      ,
      err => console.error
    );


  }



}
