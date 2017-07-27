import { Injectable } from '@angular/core';
import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';
import { UFService } from './uf.service';
import { DadoNome} from '../types/todas-ufs'

@Injectable()
export class GetAllService {

constructor(private ufService: UFService) { }

  joinUfs(): DadoNome[]{
    let dados_finais: DadoNome[] = [];
    let i: number;
    i = 0;
    let all : Dados[] = VALORES;

    all.forEach((item) => {
      let dado : DadoNome = new DadoNome();
      dado.ano = item.ano;
      dado.valor = item.valor;
      dado.uf = this.ufService.getPorID(item.uf_id);
      dados_finais.push(dado);
    });
    return dados_finais;
  }
}
