import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'
import {DadoNome} from "./types/todas-ufs";
import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'
import {GetAllService} from "./services/get-all.service";
import {UFs} from './services/mock-ufs';

@Component({
  selector: 'my-todos-dados',
  templateUrl: './todos-dados.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService, GetAllService]
})

export class TodosDadosComponent implements OnInit {
    title = 'Todos os dados do damu da BRASILÂNDIA';
    ufs : UF[];
    uf: UF;
    qtd: number;
    media: number;
    dados: DadoNome[];
    dados_da_samu : Dados[];
    constructor(private ufService: UFService, private samuService: SamuService, private TodasUFsService: GetAllService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getPorID(33);
        this.media = this.samuService.mediaMunicipio(33);
        this.dados = this.TodasUFsService.joinUfs();
    }
}
