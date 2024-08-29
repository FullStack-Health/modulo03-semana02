import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  httpClient = inject(HttpClient);
  pathUrl = "seu_endereco_da_api"; //exemplo: "http://localhost:8081"

  constructor() { }

  list(){
    //pra essa chamada não precisamos de parâmetros e nem de headers
    //mas caso nessecite de headers, é só passar um objeto com os headers
    //como segundo parâmetro sendo um objeto do tipo HttpHeaders. Ex:
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(`${this.pathUrl}/paciente`);
  }

  detail(){

  }
}
