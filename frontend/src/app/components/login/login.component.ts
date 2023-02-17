import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuarioLoginModel } from 'src/app/Models/UsuarioLoginModel';

import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  edit: boolean = false;
  usur: UsuarioLoginModel = {
    COD: '',
    PWD: '',
  }
  Usuarios: any = []

  constructor(protected Usuariosservices: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  GetAcceso() {
    this.Usuariosservices.GetAcceso(this.usur.COD, this.usur.PWD).subscribe(
      res => {
        console.log(res);
        this.Usuarios = res;
        if (this.Usuarios.length > 0) {
          this.router.navigate(['/Persona']);
        }
      }
      ,
      err => console.error
    );
  }
}