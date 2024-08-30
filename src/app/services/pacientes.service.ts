import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  httpClient = inject(HttpClient);
  pathUrl = "seu_endereco_da_api"; //exemplo: "http://localhost:8081"

  constructor() { }

  /**
   * Faz uma requisição para a API para capturar todos os pacientes.
   * 
   * @returns - Retorna uma lista de pacientes.
   */
  list(){
    //pra essa chamada não precisamos de parâmetros e nem de headers
    //mas caso nessecite de headers, é só passar um objeto com os headers
    //como segundo parâmetro sendo um objeto do tipo HttpHeaders. Ex:
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(`${this.pathUrl}/paciente`);
  }

  /**
   * Metodo responsavel por buscar um paciente pelo id.
   * 
   * @param id {number} - id do paciente para detelhar ele.
   * @returns  - Retorna o objeto de paciente detalhado.
   */
  detail(id: number){
    return this.httpClient.get(`${this.pathUrl}/paciente/${id}`);
  }
}
