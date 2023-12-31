import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroProjetoComponent } from './pages/projeto/cadastro-projeto/cadastro-projeto.component';
import { ListagemProjetoComponent } from './pages/projeto/listagem-projeto/listagem-projeto.component';
import { ListagemTarefaComponent } from './pages/tarefa/listagem-tarefa/listagem-tarefa.component';
import { CadastroTarefaComponent } from './pages/tarefa/cadastro-tarefa/cadastro-tarefa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProjetoComponent,
    ListagemProjetoComponent,
    ListagemTarefaComponent,
    CadastroTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
