import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
})
export class TopoComponent {
  titulo: string;

  constructor() {
    this.titulo = 'Aprendendo Inglês';
  }
}
