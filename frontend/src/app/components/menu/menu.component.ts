import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargarscript/cargar-scripts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _CargarScript:CargarScriptsService){
    _CargarScript.CargarScripts(["menu"]);
  }

  ngOnInit(): void {
  }

}
