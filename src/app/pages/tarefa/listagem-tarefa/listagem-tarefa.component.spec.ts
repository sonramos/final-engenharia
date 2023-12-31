import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTarefaComponent } from './listagem-tarefa.component';

describe('ListagemTarefaComponent', () => {
  let component: ListagemTarefaComponent;
  let fixture: ComponentFixture<ListagemTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemTarefaComponent]
    });
    fixture = TestBed.createComponent(ListagemTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
