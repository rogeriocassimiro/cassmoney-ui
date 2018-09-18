import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  constructor() { }

  pessoas = [
    { nome: 'Rogério Cassimiro', cidade: 'Inhumas', estado: 'GO', status: true },
    { nome: 'Maria Eterna', cidade: 'Damolândia', estado: 'GO', status: true},
    { nome: 'João Cassimiro', cidade: 'Nova Veneza', estado: 'GO', status: true },
    { nome: 'Marcela Jayme', cidade: 'Inhumas', estado: 'GO', status: true, },
    { nome: 'Baleia', cidade: 'Caturaí', estado: 'GO', status: false },
    { nome: 'Bernardo', cidade: 'Goiânia', estado: 'GO', status: false }
  ];

}
