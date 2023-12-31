import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemProjetoComponent } from './listagem-projeto.component';

describe('ListagemProjetoComponent', () => {
  let component: ListagemProjetoComponent;
  let fixture: ComponentFixture<ListagemProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemProjetoComponent]
    });
    fixture = TestBed.createComponent(ListagemProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
