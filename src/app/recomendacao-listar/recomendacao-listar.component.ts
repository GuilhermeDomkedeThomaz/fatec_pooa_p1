import { Component, Input } from '@angular/core';
import { Recomendacao } from '../recomendacao.model';

@Component({
  selector: 'recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css']
})
export class RecomendacaoListarComponent {

  @Input() recomendacoes: Recomendacao[] = [];
}
