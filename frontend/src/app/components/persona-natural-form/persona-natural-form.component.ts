import { Component, OnInit, HostBinding } from '@angular/core';
import { PersonaModel } from 'src/app/Models/PersonaModel';

import { PersonaService } from '../../services/persona.service';
import { Router } from '@angular/router';

import { CargarScriptsService } from 'src/app/cargarscript/cargar-scripts.service';

@Component({
  selector: 'app-persona-natural-form',
  templateUrl: './persona-natural-form.component.html',
  styleUrls: ['./persona-natural-form.component.css']
})
export class PersonaNaturalFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  edit: boolean = false;
  color: string= 'red';
  person: PersonaModel = {
    PERID: 0,
    DOC_PER: '',
    NOM_PER: '',
    APE_PAT: '',
    APE_MAT: '',
    DIR:'',
    DIR_REF:''
  }
  Personas: any = []

  constructor(protected personasservices: PersonaService, private router: Router, private _CargarScript:CargarScriptsService) 
  {
    _CargarScript.CargarScripts(["step"]);
  }

  ngOnInit() {

    this.GetPersonas();
  }

  GetPersonas() {
    this.personasservices.getPersonas().subscribe(
      res => { this.Personas = res; },
      err => console.error
    );
  }

  SaveNewPersona() {
    this.personasservices.PersonasaveGame(this.person)
      .subscribe(
        res => {
          console.log(res);
          this.GetPersonas();
          this.person = {
            PERID: 0,
            DOC_PER: '',
            NOM_PER: '',
            APE_PAT: '',
            APE_MAT: '',
            DIR: '',
            DIR_REF: ''
          }
          // this.router.navigate(['/persona']);
        },
        err => console.error(err)
      )
  }

  SaveNewPersona_Fast(){
    var mensaje:string = "Hola Mundo";
    console.log(mensaje);

    this.personasservices.PersonasaveGame(this.person)
      .subscribe(
        res => {
          console.log(res);
          this.GetPersonas();
          this.person = {
            PERID: 0,
            DOC_PER: '',
            NOM_PER: '',
            APE_PAT: '',
            APE_MAT: '',
            DIR: '',
            DIR_REF: ''
          }
          // this.router.navigate(['/persona']);
        },
        err => console.error(err)
      )
  }

  DeleteNewPersona(Id: number) {
    this.personasservices.PersonaDelete(Id)
      .subscribe(
        res => {
          console.log(res);
          this.GetPersonas();
        },
        err => console.error(err)
      )
  }

  UpdateNewPersona(Data: any) {
    this.person = Data
    this.edit = true
    // this.personasservices.PersonasaveGame(this.person)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.GetPersonas();
    //       this.person = {
    //         PERID: 0,
    //         DOC_PER: '',
    //         NOM_PER: '',
    //         APE_PAT: '',
    //         APE_MAT: ''
    //       }
    //       // this.router.navigate(['/persona']);
    //     },
    //     err => console.error(err)
    //   )
  }

  UpdateTotalNewPersona() {
    this.personasservices.PersonasUpdate(this.person)
      .subscribe(
        res => {
          console.log(res);
          this.GetPersonas();
          this.person = {
            PERID: 0,
            DOC_PER: '',
            NOM_PER: '',
            APE_PAT: '',
            APE_MAT: '',
            DIR: '',
            DIR_REF:''
          }
          this.edit = false
          // this.router.navigate(['/persona']);
        },
        err => console.error(err)
      )
  }

  
  CambiarColor (){

    this.color='green'

  }



}
