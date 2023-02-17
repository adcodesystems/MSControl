import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcacion',
  templateUrl: './marcacion.component.html',
  styleUrls: ['./marcacion.component.css']
})
export class MarcacionComponent implements OnInit {

  colorbody="linear-gradient(to bottom right, #ff4848, #F00000)";

  constructor() { }

  ngOnInit(): void {
  }

  changecolor(){
    this.colorbody="linear-gradient(49.52deg, #00AD42 49.61%, #00C957 76.81%)";
  }


}
