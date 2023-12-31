import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroTarefaComponent} from "./cadastro-tarefa/cadastro-tarefa.component";
import {ListagemTarefaComponent} from "./listagem-tarefa/listagem-tarefa.component";
import {MaterialModule} from "../../shared/material/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    CadastroTarefaComponent,
    ListagemTarefaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CadastroTarefaComponent,
    ListagemTarefaComponent
  ]

})
export class TarefaModule { }
