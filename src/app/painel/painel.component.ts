import { Component, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})
export class PainelComponent {
  frases: Array<Frase>;
  instrucao: string;
  resposta: string;
  rodada: number;
  rodadaFrase: Frase;
  progresso: number;
  tentativas: number;
  @Output() encerrarJogo: EventEmitter<string>;

  constructor() {
    this.resposta = '';
    this.frases = FRASES;
    this.instrucao = 'Traduza a frase:';
    this.rodada = 0;
    this.progresso = 0;
    this.rodadaFrase = this.frases[this.rodada];
    this.tentativas = 3;
    this.encerrarJogo = new EventEmitter();
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      //trocar pergunta da rodada
      this.rodada++;

      //atualizar a barra de progresso
      this.progresso = this.progresso + 25;

      if (this.progresso === 100) {
        this.encerrarJogo.emit('Vitória');
      }

      //mudar a frase
      this.atualizaRodada();
    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('Derrota');
      }
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
