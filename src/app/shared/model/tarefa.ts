import {Projeto} from "./projeto";

export class Tarefa{
  id: number;
  titulo: string;
  descricao: string;
  projeto?: Projeto;

  constructor(id: number, titulo: string, descricao: string) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.projeto = undefined;
  }
}
