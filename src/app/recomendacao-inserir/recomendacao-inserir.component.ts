import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recomendacao } from '../recomendacao.model';

@Component({
  selector: 'recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent {

  @Output() recomendacaoInserida = new EventEmitter<Recomendacao>();

  descricao!: string;

  incluirRecomendacao(form: NgForm) {

    if (form.invalid) {
      return;
    }

    const recomendacao = {
      descricao: form.value.descricao
    };

    this.recomendacaoInserida.emit(recomendacao);
  }
}
