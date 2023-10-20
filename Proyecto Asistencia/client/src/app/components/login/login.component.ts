import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ButtonLoginStyles } from '../../../app/models/StylesPrime';


import { ColoresPrincipales, ColoresSecundarios ,ColoresGrises } from '../../../app/styles/colors';

import { Tipografias} from '../../../app/styles/fonts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  autenticacionExitosa: boolean = true;
  constructor(private authService: AuthService, private router: Router) { }

  /*ESTILOS*/
  ButtonIniciarSesion = ColoresPrincipales.ad_cp2;
  TipografiaEstilo = Tipografias.ad_tip1;
  

  login() {
    if (this.autenticacionExitosa) {
      this.authService.login();
      this.router.navigate(['/']); // Redirige a la página principal
    }
  }
}
