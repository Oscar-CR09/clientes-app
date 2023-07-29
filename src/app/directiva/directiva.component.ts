import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScrip','JavaScript','java SE','C#'];

  habilitar: boolean = true;
  constructor() { }

  sethabilitar():void {
    this.habilitar = (this.habilitar == true)? false:true;
  }
}
