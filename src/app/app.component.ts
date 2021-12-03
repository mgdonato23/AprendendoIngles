import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jogoEmAndamento: boolean = true;
  tipoEncerramento: string = '';


  encerrarJogo(tipo: string): void {
    this.tipoEncerramento = tipo;
    this.jogoEmAndamento = false;
  }

  reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = '';
  }
}
