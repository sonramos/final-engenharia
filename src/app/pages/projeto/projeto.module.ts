import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroProjetoComponent} from "./cadastro-projeto/cadastro-projeto.component";
import {ListagemProjetoComponent} from "./listagem-projeto/listagem-projeto.component";
import {MaterialModule} from "../../shared/material/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    CadastroProjetoComponent,
    ListagemProjetoComponent
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
    CadastroProjetoComponent,
    ListagemProjetoComponent
  ]
})

export class ProjetoModule { }
