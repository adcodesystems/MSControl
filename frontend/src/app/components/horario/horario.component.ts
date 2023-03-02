import { Component, OnInit, HostBinding } from '@angular/core';
import { HorarioSaveModel } from 'src/app/Models/Horario/HorarioSaveModel';
import { HorarioDetalleModel } from 'src/app/Models/Horario/HorarioDetalleModel';
import { HorarioDetallePopupModel } from 'src/app/Models/Horario/HorarioDetallePopupModel';
import { Router } from '@angular/router';
import { HorarioPrueba } from 'src/app/Models/Horario/HorarioPrueba';
import { HorarioService } from '../../services/horario.service';
import { GeneralService } from '../../services/general.service';
import { TipoSecuenciaMarcacionModel } from 'src/app/Models/General/TipoSecuenciaMarcacionModel';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  FlaInicioConfiguracion: boolean = false;
  model = new HorarioDetalleModel();

  TurnoLista: any = []
  ModalidadHorarioLista: any = []
  TipoHorarioLista: any = []
  TipoSecuenciaMarcacionLista: any = []
  ListaPrueba: Array<TipoSecuenciaMarcacionModel> = [];
  HorarioEntity: HorarioSaveModel = {
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
    FechaRegistro: new Date("2016-01-17T09:50:29+0000"),
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


  constructor(protected Horarioservices: HorarioService, protected GeneralServices: GeneralService, private router: Router) {
  }

  ngOnInit() {

    this.FlaInicioConfiguracion = true;
    this.Getturnos();
    this.GetModalidadHorarios();
    this.GetTipoHorarios();
    this.GeTipoSecuenciaMarcacionItems();
  }
  Getturnos() {
    this.GeneralServices.GetTurnoItems().subscribe(
      res => {
        this.TurnoLista = res;
      },
      err => console.error
    );
  }
  GetModalidadHorarios() {
    this.GeneralServices.GetModalidadHorarioItems().subscribe(
      res => {
        this.ModalidadHorarioLista = res;
      },
      err => console.error
    );
  }
  GetTipoHorarios() {
    this.GeneralServices.GetTipoHorarioItems().subscribe(
      res => {
        this.TipoHorarioLista = res;
      },
      err => console.error
    );
  }
  GeTipoSecuenciaMarcacionItems() {
    this.GeneralServices.GeTipoSecuenciaMarcacionItems().subscribe(
      res => {
        this.TipoSecuenciaMarcacionLista = res;
      },
      err => console.error
    );
  }

  GetAcceso() {
    var e = (document.getElementById("cboTimeId")) as HTMLSelectElement;
    console.log(e.textContent)

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

      this.HorarioEntity.InicioHora = this.HorarioDetallePopupEntity.HoraInicio;
      this.HorarioEntity.InicioMinutos = this.HorarioDetallePopupEntity.MinutoInicio;
      this.HorarioEntity.TerminoHora = this.HorarioDetallePopupEntity.HoraTermino;
      this.HorarioEntity.TerminoMinutos = this.HorarioDetallePopupEntity.MinutoTermino;

      this.HorarioEntity.TotalHorasTrabajo = this.HorarioDetallePopupEntity.HoraTermino - this.HorarioDetallePopupEntity.HoraInicio;


    } else {

      var e = (document.getElementById("cboTipoMarcacionId")) as HTMLSelectElement;
      this.HorarioEntity.TurnoId = parseInt(e.value);
      var NomTipoMarcacionElement = e.options[e.selectedIndex].textContent



      this.model = new HorarioDetalleModel();
      this.model.Items = 2;
      this.model.Hora = this.HorarioDetallePopupEntity.HoraInicio;
      this.model.Minuto = this.HorarioDetallePopupEntity.MinutoInicio;
      this.model.NomTipoSecuenciaMarcacion = this.HorarioDetallePopupEntity.NomTipoSecuenciaMarcacion;
      this.model.NomTipoSecuenciaMarcacion = String(NomTipoMarcacionElement).toUpperCase();
      this.HorarioEntity.data.push(this.model);


      this.model = new HorarioDetalleModel();
      this.model.Items = 3;
      this.model.Hora = this.HorarioDetallePopupEntity.HoraTermino;
      this.model.Minuto = this.HorarioDetallePopupEntity.MinutoTermino;
      this.model.NomTipoSecuenciaMarcacion= String(NomTipoMarcacionElement).toUpperCase();
      this.HorarioEntity.data.push(this.model);
    }

    this.HorarioEntity.data.sort((a, b) => a.Hora - b.Hora);

    let Contador: number = 0;
    this.HorarioEntity.data.forEach(function (value) {
      Contador = Contador + 1;

      value.Items = Contador;

    });


  }

  Save() {

    var e = (document.getElementById("cboTurnoId")) as HTMLSelectElement;
    this.HorarioEntity.TurnoId = parseInt(e.value);

    this.Horarioservices.SaveHorario(this.HorarioEntity).subscribe(
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
