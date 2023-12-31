import {Tarefa} from "./tarefa";

export class Projeto {
  id: number;
  nome: string;
  descricao: string;
  tarefas?: Array<Tarefa>;

  constructor(id: number, nome: string, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.tarefas = undefined;
  }
}
