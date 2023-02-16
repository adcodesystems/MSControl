import { Component, OnInit, HostBinding } from '@angular/core';
import { HorarioModel } from 'src/app/Models/Horario/HorarioModel';
import { HorarioDetalleModel } from 'src/app/Models/Horario/HorarioDetalleModel';
import { HorarioDetallePopupModel } from 'src/app/Models/Horario/HorarioDetallePopupModel';
import { Router } from '@angular/router';
import { HorarioPrueba } from 'src/app/Models/Horario/HorarioPrueba';
import { HorarioService } from '../../services/horario.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  FlaInicioConfiguracion: boolean = false;
  model = new HorarioDetalleModel();

  HorarioPruebaEntity: HorarioPrueba = {
    HorarioId: 0,
    Nombre: 'Jose',
  }

  HorarioEntity: HorarioModel = {
    HorarioId: 0,
    Nombre: '',
    InicioHora: 0,
    InicioMinutos: 0,
    TerminoHora: 0,
    TerminoMinutos: 0,
    TotalHorasTrabajo: 0,
    TurnoId: 0,
    TipoHorarioId: 0,
    ModalidadHorarioId: 0,
    FechaRegistro: Date(),
    UsuarioRegistro: '',
    EstadoRegistro: true,
    data: []
  }

  HorarioDetalleEntity: HorarioDetalleModel = {
    HorarioDetalleId: 0,
    HorarioId: 0,
    Items: 0,
    Hora: 0,
    Minuto: 0,
    TipoSecuenciaMarcacionId: 0,
    NomTipoSecuenciaMarcacion: '',
    FlaInicio: false
  }

  HorarioDetallePopupEntity: HorarioDetallePopupModel = {
    HorarioDetalleId: 0,
    HorarioId: 0,
    Items: 0,
    HoraInicio: 0,
    MinutoInicio: 0,
    HoraTermino: 0,
    MinutoTermino: 0,
    TipoSecuenciaMarcacionId: 0,
    NomTipoSecuenciaMarcacion: '',
    FlaInicio: false
  }


  constructor(protected Horarioservices: HorarioService, private router: Router) {
  }

  ngOnInit() {

    this.FlaInicioConfiguracion = true;


  }

  GetAcceso() {

    if (this.FlaInicioConfiguracion) {
      this.model = new HorarioDetalleModel();
      this.model.Items = 1;
      this.model.Hora = this.HorarioDetallePopupEntity.HoraInicio;
      this.model.Minuto = this.HorarioDetallePopupEntity.MinutoInicio;
      this.model.NomTipoSecuenciaMarcacion = 'LLEGADA';
      this.HorarioEntity.data.push(this.model);


      this.model = new HorarioDetalleModel();
      this.model.Items = 4;
      this.model.Hora = this.HorarioDetallePopupEntity.HoraTermino;
      this.model.Minuto = this.HorarioDetallePopupEntity.MinutoTermino;
      this.model.NomTipoSecuenciaMarcacion = 'TERMINO';
      this.HorarioEntity.data.push(this.model);
      this.FlaInicioConfiguracion = false;

    } else {


      this.model = new HorarioDetalleModel();
      this.model.Items = 2;
      this.model.Hora = this.HorarioDetallePopupEntity.HoraInicio;
      this.model.Minuto = this.HorarioDetallePopupEntity.MinutoInicio;
      this.model.NomTipoSecuenciaMarcacion = this.HorarioDetallePopupEntity.NomTipoSecuenciaMarcacion;
      this.HorarioEntity.data.push(this.model);


      this.model = new HorarioDetalleModel();
      this.model.Items = 3;
      this.model.Hora = this.HorarioDetallePopupEntity.HoraTermino;
      this.model.Minuto = this.HorarioDetallePopupEntity.MinutoTermino;
      this.model.NomTipoSecuenciaMarcacion = this.HorarioDetallePopupEntity.NomTipoSecuenciaMarcacion;
      this.HorarioEntity.data.push(this.model);
    }

    this.HorarioEntity.data.sort((a, b) => a.Hora - b.Hora);

    let Contador: number = 0;
    this.HorarioEntity.data.forEach(function (value) {
      Contador = Contador + 1;

      value.Items = Contador;

    });

    console.log(this.HorarioEntity);

  }

  Save() {

    this.Horarioservices.SaveHorarioPrueba(this.HorarioPruebaEntity).subscribe(
      res => {
        console.log(res);
        // this.Usuarios = res;
        // if (this.Usuarios.length > 0) {
        //   this.router.navigate(['/Persona']);
        // }
      }
      ,
      err => console.error
    );

  }
}
