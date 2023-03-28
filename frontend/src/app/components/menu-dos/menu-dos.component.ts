import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargarscript/cargar-scripts.service';


@Component({
  selector: 'app-menu-dos',
  templateUrl: './menu-dos.component.html',
  styleUrls: ['./menu-dos.component.css']
})
export class MenuDosComponent implements OnInit {

  constructor(private _CargarScript:CargarScriptsService){
    _CargarScript.CargarScripts(["sidebar"]);
  }

  ngOnInit(): void {
  }

}
