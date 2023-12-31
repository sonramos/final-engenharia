import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Tarefa} from "../model/tarefa";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  api = `${environment.api}projetos`

  constructor(private httpClient: HttpClient) { }

  inserir(newTarefa: Tarefa): Observable<Tarefa> {
    console.log(this.api);
    return this.httpClient.post<Tarefa>(this.api, newTarefa);
  }

  listar(): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(this.api);
  }


  apagar(id: number): Observable<object>{
    return this.httpClient.delete(`${this.api}/${id}`)
  }

  atualizar(company: Tarefa): Observable<object>{
    return this.httpClient.put(`${this.api}/${company.id}`, company);
  }

  getById(id: number): Observable<Tarefa> {
    return this.httpClient.get<Tarefa>(`${this.api}/${id}`);
  }
}
