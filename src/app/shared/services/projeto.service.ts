import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Projeto} from "../model/projeto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  api = `${environment.api}projetos`

  constructor(private httpClient: HttpClient) { }

  inserir(newProjeto: Projeto): Observable<Projeto> {
    console.log(this.api);
    return this.httpClient.post<Projeto>(this.api, newProjeto);
  }

  listar(): Observable<Projeto[]> {
    return this.httpClient.get<Projeto[]>(this.api);
  }


  apagar(id: number): Observable<object>{
    return this.httpClient.delete(`${this.api}/${id}`)
  }

  atualizar(company: Projeto): Observable<object>{
    return this.httpClient.put(`${this.api}/${company.id}`, company);
  }

  getById(id: number): Observable<Projeto> {
    return this.httpClient.get<Projeto>(`${this.api}/${id}`);
  }
}
