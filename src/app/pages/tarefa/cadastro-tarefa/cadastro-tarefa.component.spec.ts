import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTarefaComponent } from './cadastro-tarefa.component';

describe('CadastroTarefaComponent', () => {
  let component: CadastroTarefaComponent;
  let fixture: ComponentFixture<CadastroTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroTarefaComponent]
    });
    fixture = TestBed.createComponent(CadastroTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
